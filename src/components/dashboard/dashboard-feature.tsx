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
    "24EqRAnDbeXgGQ26zipjhwfX2eNJz47acaSQYaiNGoPkaGxwKFTvYDB73ueNuGBXSd4u2hgNwDFD1yarTAnQ8RwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53PC6BGkeHERgBEk9akER6s2PYyRNRovTAJNGpw5wZQiHYFs9dkgGN1iFcNwp8hzYQEaGniHa64UkWYqvcJ1UCyp",
  "key1": "WBTgkN5q3hUDZjoEWHTYdt5KKp8TkDptkDTx1sbZT7UFbxHoF8wiR6DjgUash97B2dN2JwgWAC6xg16WDk8qSKc",
  "key2": "2nix6aekZo7rdQARMVWZgh7XKPo5dibPreGDNqayJJvXHtF2dzZjLAftU1Dgw83btZCPMVewEBxqZpa6G4Yr2ytG",
  "key3": "DYRWGtw1vtg1X74NGYsHnug6yNYMdezgWpi2kiWviVzX5fWDYk7DRSM4kkkCDEkUBmttataVTzEY95aA5iEbBaB",
  "key4": "NK85tcdiN3PekrBQwn6Q5HEtzCRreyLGoH7HVhiZ2KxdzMdMFCGB8zPrQcAqgnV71X4Bh7pBvPy3b9LmdLxgQ2p",
  "key5": "3Hu4chgP7XHXLgf8iP4HgczVpqVthVrmJkqM2CFSmKDjNR9HwoB5ZBWnAUQbpU2RnAhFcswCN835MZoMrgV72AgX",
  "key6": "3yobk4WdpMdV4VsYqRYhWSiF2evmgqT6Fn92KgSBEnkyVNfbU4UASBhmfHbgazmf7GkBFSYovTSo7UrKGHo5g4U6",
  "key7": "3H54HMrKypatz7TycHFKDzJw1ADMpoe74Ee2aYss6kMf7TecpLUgYPFNV1j2vwdD3taXhdgbnrLNj2zHfN8De3Du",
  "key8": "53Zd4Fd8wzczmCCtmYUS7eodoj6nNA77bShgv8zo6YBP3q4D5Rp6AfDsLpeNYZhqFN2RQK3iNCmNncLruNEdn269",
  "key9": "2Hfh2KXnB8EoRNB4dfBrFmkvpD6wT1QxKsg4CBZ5WsR4pre5aKhUK8t7dDDAyKDx9t1rxk9PDxU79G8yW88uQLpJ",
  "key10": "3gZe2kWqBTcxzsToKhbnEDFty1iDptAZ7wZVFFmo7R17KY1sDZJjK4DL5G7KMJ5kjAac5p1NcasMD9MrkiSyUqhp",
  "key11": "WqNNnLPkALE5QifX5yze2Li7mqyaj2j79D4Qk1oFGnDgHBv3K7Mi9aZjNjayfBYDKdTphf4wP8uupdFx9sw5hHw",
  "key12": "45NhfkMmxVTsrxXb9yoNm2s3Ga9JR94KzJ1d6nfSw5VrMQDQxg8YcC2kweahXQvUe72G9PwZXySrrNks4Lm1VZUV",
  "key13": "v6mz193LfomLHoqJw2YTBZvQPH6KktkoQywB4RXLuF89kqqEDMqfCCqwfTj9op9qxz1RXNSiZYz3ekqysmnwTUD",
  "key14": "5RfCi3eezBX9ECaP9SeQXwQDR7f5aqTLSdsPKCWVLrWDX7i3wRpr4hx3qtFbgpn7LWdkdgBaru54Lp9GaPmaUVY3",
  "key15": "5ZGSrXEThSTSwt25pNtDKYc7jz3eSNwXaUUZJLP7dRwqM2Sh1EEHLxZDBCQAJsEoxV1APMJ7Ghx7SZTUkGhik7nb",
  "key16": "213ocCQd3uwjSJX5jjNd8vM2KDAv4VHJ45Yi6SfvPjQ97F5hSTz9RJLKGkvnUzHkQiaUCxiMSf89BBzioBTCGEsS",
  "key17": "4hEe7ZzX27Y8bkEuRwmuEkiPqC3W6Ec9JHxubCpDPtnQqLRvLQ58rR6pGGcFj5np2dmLhHpYpsaUWJUQUeYkryK9",
  "key18": "WXp1jRrmDXXeucVaVkLAQSmindjd72FUjoKmBYYB83Zh39LoFQnvwXAMkRduN4gUve9dwY6b1WyDaQpMvADfbvq",
  "key19": "5pRpycEVYLFQLnwZJRDkhdEYPaySBc5EXvvgiwLYQXsj65Vyjd4ZQaFcPT6M735TU15qwmV5zc3bVZ1ySSfo3V2H",
  "key20": "2rNVdUr9mVPcyAJVD3Z7MZTMkJEHY1Ssr7p3skkakAzwbyhdd5e2ohyxkVVgWA7gYj96FwuhYRdrWdKiTpSsgqhz",
  "key21": "499mtJ13kNYwEu3U7XnnnUm4qNDtaLJxTkAFxmNy6p5xrF4m8ZeR6nmRLnQwcjfuCRqune39UCUsNxGWGmctsUeS",
  "key22": "5zGPr7NpdFTWF8EjohbAdyDAiPAQa1JLU5gjjGWyVRrbrGWAL9cGwvLbzkpdwSCEpeY6RnARzFJfvqzrnWZsfGfL",
  "key23": "3SzGiFL2rHXTzKddqF3dqLVnfLnGgWJtRcnTmH4AW7xqzi1ihU2XfibmP26Kss5ncWQbm9KkL6m7UHZXRbGdcfRz",
  "key24": "4YS2zJvU6CHawAJpF83LTeyy6k75ABWfc9U8RhUrFL7CpmBqQZVexcmFEpfbFisUgbvj6S6rQo6cmFME5avNBik9",
  "key25": "jyZAVkszNMFZvjFb2RPgKYRuKfSHC5pWjEBsWzvCJDtdWXjxaLFgg1C1vZhPENf9gDtHtHrMiG3v1L2DDyowtwF",
  "key26": "5dKYQiyN5yRwaeTb3PqmDEJHXp9pJZhwziyBwsZJgyGURe86Ewf3israLTRuRwCKixBXbJcUpehdi7kUoPyRjgWk",
  "key27": "27JitM6jiX4bpkgTGTHj6HX7823EEupQbErdvNdbrJhxZVDyS8piXc4C8MFe8H7MqAnrGbfHQEfvG6kGcGZ8A1e6",
  "key28": "74D4UK8Vj6V3fRJJHFgGX2t2tMeEmeE7cP6KMqSs3vV87hRbQcgoHEjbkjvoU6ebVxNUFWZPeUTtgpwiMxWLk8u",
  "key29": "ToWkqdc34F1xasLvhXYfJWeFBVhrQC8jQWM4H8WXQMQBjEDPrEvf4V8GbUY6vrMNSmn62eyfZh71RHxhZ7dr4tZ",
  "key30": "GFhDTscEtHUJ5nsyLwfRCyjW1Av9XUePWNn3UCJPxztqz7RkdwTtHXaTNARE2cchpjzAdcUDpK3tnEMkpT4tieU",
  "key31": "44s2tiXkoNzpm2JGByD6oypncTLP6Bj8H1QZVLLt8K4rKdD9doRvQ1kY2j7zcAKDdFGy2N2hM5vddoijcWxCPgFF",
  "key32": "4A4RzMnd718z1vr5fzvEEfChyXrgCnt4ue7cKi3wDyK1ggFHyCiUsefC8nWMTv9khsnqJdQ3J8KWDu6kqFb8AtxW"
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
