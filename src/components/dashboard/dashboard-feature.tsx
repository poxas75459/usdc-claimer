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
    "56wkfjnEEjhZoiAYc6hjwkgpDSLE46sCTxg3WAzjRC9xuSP1RWTnU1zhMUtf5qbARRhy8oxXMK4HmYPuUvUw6X1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sdtwvh5STELzEGiTXxZB97AuoedCDxrEKr1X7nBxCzd1H4YupJHFXSXMdR39we7fXgSJVTa4ERpTrfERR1HrG72",
  "key1": "3R9Jp76uCp2VUdM2NHwkQjPr7ywqymVjmy7NesypU8Z5QAFrVfKKqkzUXBPxWTHaZFE5AxFT4CKowspBNCUdYJCm",
  "key2": "4M2S6e95gao9hmL51ncPyqthS5vJungtN9i2r3vwPeMFNx3sWYuj9J41DJJZuZLwRX42JWitdpbQ7uK2qJsR5XhU",
  "key3": "4EvuURvzbxqSV3DrQALjuFgzBbz1uKeNM8x8DGn2zyFCtaZTnUAuztAFqER7kkrQgG8oG2pKDccVMmcKPhg4xThJ",
  "key4": "3ZKKcd5sc9V1MSwRfR9tjFJsmGAWBJpAGnNvqJj8t3dDsfk25iepPUEp6Scsq5KpMPpPhTMAzgqvjByAYKHAc8pB",
  "key5": "4sPN8DTf3L1rmKXJvXR2Nds12ARvdr7ah7U9Gcm2VP5sUfph5tKWQWMaTjBjhpTUXXSXPeGPxikVPQhBfUUhNNPc",
  "key6": "37nCuEZfwuCvsXRRj7B2Z3sgngrqR9uTxSpYxCFyLm4Gr5KFRpHmVH1M2tBR43TUQshb1zoysgAGd31Cq8MW9e6s",
  "key7": "2oY5j1sfqJNrPbRiDcKR2RJP2Cekkkm5hCndayjTWfEbVqmLWQNoLoeSuu1Tmb2LGtgzWm9GkEmhzv2DofZacyJb",
  "key8": "Zacc8pwBEF2nVdjA3onc9xjaZzuPLrXKwNTNeXnzE4mEDG8ax1wuPABe4BEqLk1LPGWMkhmDh8JKcjqyUvqKDhG",
  "key9": "3MFu7KzuMSdTQoiZHUGDaqEHfoRCjzLEtcdA9xN1F9o45b8eEV8YUFnJ9tqDHszqMHx7kj8QVyZrTmch9eeBzayP",
  "key10": "Egn68f2UHYKZ6ms7Jz211MJdEdtppUW1M34T9KCAAD4XLkqkCy5gtFa9Q1n6V9MzPKm14jZtsx6d8jSFq2fEKfm",
  "key11": "54vxhYUGEuscjWggD3BCXyrhiz2RGQmkPvvNnY1cvqXCiYA6Xxyd82jc4B9jJWWQcoD3DBhBaDpzjcS9NbtsTHTF",
  "key12": "iRLv82QThB4nV9DVPr1MfsDZ2ex6Cv2XLPpaTyznRhJ6YxRNLGtuYEgn37qeEFNatsLEUe5Se1F71LZwDxFY1wa",
  "key13": "5pScUeccwHo57FpodGA49cGQoMhwRKUgzyq7uWDcgQ4Qp9j9X59jgu2sgnJjrAP881ukbcYNPpxYmzb3iXUhLBWB",
  "key14": "5F4GhAr5CWpdvP1E721vrcV3eRKU7jsMHH2PcgamrwM4oYXnEA7xtj19emsP5WmvBuMqKcWFkJTwcLCAZu2DSNoh",
  "key15": "2RnpGuinuLGpyKGzGJBvNbKCuHxCP1Z3eD96LZ4VLc6gF9hgHdmEucpox9VCqvuNrpWphxHB38NtXPvK3miR3Pcv",
  "key16": "zbXVqvQkJmhwH8hPozyU46o7bPooKwwSHYs5qUHLC9cdU7ahw7VadggZ41JXYka7s247niJ8n4dhk4mrCSDCKj8",
  "key17": "2ENsUMY6qPsHDHW5zhErpFm5iyq8DrPUDXdThmcx6pZLnP1VxrTcDofnz6YcncM75BTXEmwCU8fGAz5bTCGTr7fi",
  "key18": "52mSEhhcrLUsTmxG1Hv3wUiXbtSzVAXmPobimJuhpjfe29zZbpztKk2FSDS4GE2yqdDbfsEKKpiZnXYBimPksU1P",
  "key19": "2EHTHYJTWgcj1SoTGQJwoHSYeeDhV8SX8cNpxjjfuBMTvG5DjXFDRd6ibva4Yiw9odDxUB7gf77MTWdUFs6HAH1h",
  "key20": "547By1ShR5fd43JVMLQajAjtzDWsz8e8Xu4uQoCVKtVwVgptbtofjKWFaojQ8hqoLpK5gqgvvDMuFZPg1TL8KKiA",
  "key21": "3RgwwMvhswNsPecuDXxqB7pBaRzwUaHFd4uQo1wiux4xRNozWGkzAVqPqp2XaqoTsH4Z232VejJ9iR3Wdkq5fD3M",
  "key22": "51frVQ3QKrJbfDRMwuEi6e2WFk2n44DNt1V7Bft9Gb1uoEWKfLE9mWJNWxsDGofArccEzuYfABSwB3y8jrY73apH",
  "key23": "4KW7KnchgsLpim7RAL4bzbGCzUvvsiDG1bCB2Pepww7sF1QbSmJVKXPgNPj7itBpmUvHDfB1NDczGhH23rzP1veg",
  "key24": "2gaaZks61SmrJMJxpd1F3czFiUG7U53Rk8ZSnYXcijXBiMuqNMVgaLUutHwYM6Qf3xfiTkhAaYK5hFfFeNvB5kvK",
  "key25": "3oKt36ooSBJ6w5ghoYHyVvwkFZTga6bJVDF17DEkyf1e9XAqcVYXrk86gGud8z29PHWfjobBKuqpQWvSMqvx9GRV"
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
