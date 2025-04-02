/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "aixorun9DT2Jbo3gUayQaD5w1CwWsethwbZ3uTPXJqVsGKsZLNefzbJE3Hoo7hQEHkQCTvxKLwvDCZsduvQsh1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uox4kWYxCbaKKVktYVKxL1dFfHy7JfRZaux9EKBCCV7FKoSniFDvei33vBXCcucFkidpwTgqpK8j2ZyjuJ2WyKJ",
  "key1": "4ZkHrXgLMKTSdbqjxvXxVAmEnR9einf9ybvEidc7NRfhrmgkPmeeWRjd8tJ7pa45x4GjCVFTFngCFvanmKz2JHsk",
  "key2": "5FCBFWvwma9o42Ps5cYCPKB6k1i6ckLnf4kGUw2YkUkWV8i75RPQZqyPfzEwUmqL5EeWygdxttyGPu8aYgEuap5C",
  "key3": "kWYDCmwLcg2JrTojLnScEv2jmWSC3aSPjYaYV8SZjW6YM7qbYVuvJw1A3NeH3WdQLwZaKwhhkMDrbrHy2fRtd9P",
  "key4": "3YznrA6AcFpVnFPv8RcZzQ7Sx1oQ6JbmhsEUFB1KuRp5bPcjR2eakR3cjntY4eWW5da3pt41pCJxDab9Jn7PvbkP",
  "key5": "2EmSYE7ene5Bygzuf3HzemK7U8RdKBkadPGTsaGzHjcA8KzghTAqzXXMytLRgRSK1eBayLhxBTqc8Duc3x9DpNws",
  "key6": "H1TCwGYNNmKXrv6eGdg6g6Y6KLXunsqnEQNzPDLK7kyJb9WreGbDTWFKESb4p2GdeLFLjUag6cjXGPPxqbMP1ua",
  "key7": "4cUVw6T162Cb4wWFDtsynWhoW29RqRbCLWUWaLuoModwxQWLvs9iCcN7monyGR84VtmED62a8FsyMLhYfEKzHKTt",
  "key8": "2mkVHHooTSasf4J4ySLVexjAoxwNwPsXZCo28VBRi4aip9GqkuCAjEBiCxwhdEg585ftY6fY5WZeKpi6tUJHvnHC",
  "key9": "5dfCBnzdUazNtt6Wtt86qD8rxS8nPHnkh1PSsxwJBZbbEc76eHdVrgj8MABAYCJXeVe2RyiyEsPEcbpBQb9UCLfm",
  "key10": "3TP8HG8bH4kFkxLb1Uj2CRbH4Rh7MLEDxHJXxiCcpi27dxPvDWeSwEQf9zGqgdT6cMvPGUjMXMWb73K3aB1bpo6Y",
  "key11": "32ZLdgpWxWo5UrzxxmdkkQ36xUfoD8gEzELfgCmcr4AAwQaBTkg4nns8srXsEehHiZUqMAAqLY95NjdtzyxaX2qB",
  "key12": "3u63xPLuFW9c6SsS4LTLTxGxBHN7UGxP2mbWkJiFGm5egZiiSK1y5WS1p9qDySZSD9fDrrRV19X1LttR6sajAwA7",
  "key13": "2PfwwhZExJrtx4EQBWWiEokiwQK1XYEgg33KyPd7E6r12fAzXhQdN41PNNafKhnGKnTBaX2uFxtEKR95amxGpe5w",
  "key14": "K6nWaVQZBfKBV9LWMWPzoJXKWmwoNmSQFykagFsRitCUiLy89taZbB11kbCG9RXSHY2Dgvnuz5hpPZbjFFvVSua",
  "key15": "jmUKonPAdN8nx4dS9oiKYbdAG4DAZtr6rpLvjpB3DFK3rTouYKLcBqFmLkPLicfripT3rAvdtSQuP1qeo78GQyS",
  "key16": "8XnFxCRC8cbpT527AgG7EdPTJ6gduZewXtawYWVc1T6GGketMvTQUmLqd2EuAr2Ht5SKaTZzm788W5MgRzChJTz",
  "key17": "3ww27sudPd2s3RMNc59s7fssde5xWmwiHb9iGhbsooKynvAmxZJTFsqjda8ZXF88fha6XN9cr5uDqUHbthDUD7BG",
  "key18": "2nwp1JRuFaXdHNTRHYkRzh2DRLckU2q6qLZbDCioHFSJ9NQyppeYwmjQUignWkXU2HmpBZUnde6JExTqabZKCE5h",
  "key19": "5vSWCbMGZHUfFuk9R58LbTxKv7snjyygQUtktb1f1fHSzpBNZxf2xweedMbZnvNb7CPqwhCWS4ppQYEdG9BaZJrN",
  "key20": "5Y5kgmkrutfuLPhGSBsMY2wBhZw2ixP61rhiriHBvadJPssXkkf2HtQWJvTA8AWRU6YkGNK9PitjVPccegp2k5DJ",
  "key21": "3c2txUYS84NB9fsDD6Z9aP9qmRXwngwjZLKA8g1zFXjEZ8pc9mvQjWNsQaEENVVoXACsRyeFLvwMx8FtAwTwedvx",
  "key22": "43MJMrkLMH3xJREeTvreKeU9gqCpi1dzq943Gffu2LGYHepuTHNyPchfRxCtDGAXBqFsUYaoxXuYKgb9L52Z33J7",
  "key23": "YSxc8WJY8mWVTDXSG4T7osnpWo8A7f8QqFccf9boYLfRreXZuc4Tjgvjv3zkZj1zY9JR5ttzhNGVthyRpGRveBw",
  "key24": "4qgVmR6cXoUv766f9VQ9VUbCWp9fkKYzSDfHvNo1RYdSPzvi3mJQTpn66gpNJ8zChUZCdXnzGTU6WZC9oL6hBXXE",
  "key25": "zknhBj7Gw8q4sh25uVSzU13dRGc1dJ1bEQQpc7eDUjp2z1R59M2P6kkWrWXb9eunkfsdgabVdcbQ6spYp6kSTPq"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
