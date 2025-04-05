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
    "qrp2qz2bb9EVSX867kvXa7r9K7zUzBKaZYfRRxStdnJJTgbuMuBr5TUYYCDxF14LFkBz2xyezFSQjTAnbwyKVm1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DaqgBKGnM6fkj27RyGiqFkBegFEZLvRFrPyoHrv4HN7rydH9gyCwmY7epYakTeJR7RPHmzxemwBwCviUAJjADAV",
  "key1": "23qKTwcEyVCdtCCJwWVhaBzxhVyrum1K5qqYibKCYgNREmapwqhSDwMQtwVNk2wLZK9Pi5K4NYs5vqLB9VGdmRht",
  "key2": "4vP233UfE3bRKWhU8z9YVNfRL3K9nAJfh9XVDQ69zNN8pna9u5HbnHDmjSDBSWW77fnyCWHF6ph6RU6JC6eGAi4H",
  "key3": "4TFEgaXy5Yh7hmD4MQ1qj2T8FVk1RRQYRptAsth5zn48ycQHPwqvSxSP8b7f6gL9MdNGhgniKVpHuRBsCM8n53zY",
  "key4": "XZLvBThSn5h4X9bUy1GTzYohFBDqWvBrGg3ZPyGQzs7JqxKZGmUReCDXvSn8SyamUQWYkMVRLD33sYW9EDe9WXp",
  "key5": "3LnkhXBc9t8mkSU7ZCxRqugKkZBu1RSFj5sMFNZLRXRB37HkuXb6Yf4DaQwXFiguQxUtYYnmvYKNSSGFARZuUqSt",
  "key6": "311xG6nqSEMDddsEpjV3NkGL3Ea9NwCroFcU7KScg47S7HmdFrT3kYbxagR46d2htV1NDiEtAoaNoibhmSx2NzdB",
  "key7": "4GH5HAfAEESyaa9rBNUUvVnWCKYBKw3NiG2U2jMAYRYNt6N6hJUchatemDxMEEmHuLhqVmgJjKATB2qXkZ7BDCj8",
  "key8": "4kTR3wkzH4VrELYhXNEGoxiZCFNFF3XtjuwEYPA5mZEu2BEgHoyi28E7GSYPCBnMNRKzbqm4WZhFJ3gYAUcge6dU",
  "key9": "2idGqwRoDcM7TCeuSCit9ayNkemt3HnfR5UnmfJbGtTMaP12sDp98b9GYHgnFn7Ugqw6Q937wyhnxf3iNZZEmERa",
  "key10": "2L6drunF1HbQoKAsdp3KBYUjzPU8rr2FHtZoZf8ZWFgQV8eJWxjZDxw4zhSL4UBSA5LA5LwwJTNAzeqwYUtE5gdh",
  "key11": "1BzMfc7yxGaLQVdmgHoCwGLcWmLzMmjLengeAcyBiSn8z5r2qQXmnUAGcxdg8XUwftyjiFPwW6aMnmYEwDDqfia",
  "key12": "39aQuZzxxfDAP2DKkGxaaeGikNVjj6CFGkp6Ls5aA7AMKxyudCmDPPeXtyCtaFCEuzDU5HnpBQTmLQZGbUmJWHVt",
  "key13": "2HyNDuYToTkwyyexjNarkeC5cA33AGT2Bari6M3uWZww9X2wi1wGdWyEVJrV87NvwkpZw4FQBTr89dCVRawEu75g",
  "key14": "5aXNRuCQjoNRgLhbp1PPtawqkH4FXNSeuroW4CjpvkMjq1J4tRoba54PypHr4cCsAizkjszhVYzDaJBkcKJP6Zw5",
  "key15": "31Wh1biU7qgMxVQNPKDhN48ZWhzMa1JvGiQZjwayMFm6QiWJkWhmYUU1uGf4822meeYSRfUt9ZgQQtJxgUAT2KWX",
  "key16": "3T4giwrkDCzuoEv2pFsYpyfR6hLPzNULHgZm8vCeGPfYkawBU7VA2TAZMxTyQhFsynqihPHf3Q8Yj9TNT68YuwSD",
  "key17": "3874SufWoQYDALyK7DRLnSYF3xc6t4XPSSpVosFZoovnhR5hDgyM6qPLqnscfh2RpqBmyszVhgTZk2pGjWHwr7tQ",
  "key18": "2JXqJf9nvVv3Jvoiv8ZrncFR6ufCDmMvuU15dT4t1uumYAhtgpvaLGLmmHo6spjbdEe689svBS38epcYZweKhgi6",
  "key19": "4gV539ArnvBB4c68moNTgwSsZ4ckCtLiVUcbK4knWoi2BHBNTYRS1815Wxv5Qtc5ptnhvMQLnSuD2XbTcxzzusG7",
  "key20": "38w7FEDLC7M1cpqSfmaxYmqZMinuQ2JGznXDZbViqVfCNaNNdV4yjQc9TJz2qQAAEcjxBY3MgRhsNfjkSPB9JwoC",
  "key21": "5UMPinFJenFXNDxn7kwTvBmdBsFoUYn2aWF4VBYgezk7UZdyJNiwEFsd8TxFWRswfoVX7s2czv4qBUqLDjv2YDai",
  "key22": "rBs9vRwjrWzn2fyG7wCkjcsPty5LqTEMDPvaKNQs3MfN1AeJowf3tGBHPNdKyqe8tHo7p2xNfRzYd9cSTAxeuU4",
  "key23": "5hN8pBzUUpASv44FNtVkScbUqZAE4GPRRTXXDZJ2DwUMX9i67p1LAmNJwqf3711q1we2fpvjNmMEjKs7r7MUjHBe",
  "key24": "SR6Uvqk7GxBCanfJRfYYVrNGDqx5PCxcxpJhdJ7xP5cRwPQu3hZuSGrBqg6MLL3hwfWEB5PPZpyQUY7c2RcLJCX",
  "key25": "64MrrH2CTsU9heCSFkPfK5avHf3dd9dMZdn6ykeN1f54mbjxCTYyCBb8Wi8bZG7eXFisfHi3B1JtwDdq9KMnLnMS",
  "key26": "2HLyjkM5DRr4hWFPUKaqZxjfdnV97tYQDUg8KzMsroJLHr1oYiFUA3C5abxNkPoSoAJgFfnzUyuLJ8ngjrFsu1jW",
  "key27": "3uEXGgwzC2p6J2Wy5JFGUZhrV6pBk4e6iU514SbDKXxLMff98yVD9gUFtpwy9qKaQm3jteHFC4SK6yR56BC7aYUk",
  "key28": "5uCtAEmp5232Zg8t2PaUeNE3kwaHGrPw53VNdskP2jCqSkmDLz6iGxFqY86WTFhDE9WUiRK8NZcKAB7HUBxKXnEk",
  "key29": "4C8BmL1se4azX25zL2an7rgxspWr549UWrxEfwsQvhHkPDJZ2VJrV6xRWsz85NVyUSaWFyacXiim8hvpLdUsihBp",
  "key30": "5RhHXwdjAdPM2rPGy9F7iqEwGFwkHwN1Dfxsk4CGJD4r9ozSt8MWtopmpb4dHdGhuoSX1Z77htFhyJJNiRFCeckg"
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
