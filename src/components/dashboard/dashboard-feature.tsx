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
    "5aAugr8K6zqDH3i8MXtk5LMiN8bZcx9yAA5bbZNAzxph16pSXNCCLf94jJwjjgno68pirvSsHM1HDJicNb8AGxhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qw6iAcxB2wPqzGzHUajWxgmis6GuhktvZUJoTvGTVETurM9fvU2pbo3osWEChY6p5do8EKtaRc7pBeGBuqJ7eU6",
  "key1": "5VUphbHVTYdMQzDbptu7iWdsbG1vcRtH3gXn34ctbzvQkxypQdMAWnsY8gyYX7JQroaMBrxhumz6FD8UZTQ2XYND",
  "key2": "5GU3ex8CkwDVW1SD15jZA1s9wk8okoYERNu1vvjpHEd7PYWz8Z5SZaAZKWza8CWByXoeTFfyT4BL82fVTXbnXZZV",
  "key3": "4BhRqa8D6ygLg1GmfUdRLBr1qpXDZBmRR6Php1fzrDkQUgXGhnEpPXrS1Jj8RHgkBucTmx5M2sohW6brrCajFcPq",
  "key4": "2fpUYS4QwjuDuvPo9sNnVREEn4SziJfnqzHmX6TrCBj9qAvFyisEcGQpb4KaqW1v8mYrmxsuJRPPmWSuknLnoBaL",
  "key5": "5DEJXQmUk2swXBk7TEMnqKkcVL54729JRZ8Dr1Yc5revmcKa92Q5w9sGpPc1FtVPGY6UpgiWhpmcixFrKHWGM9TT",
  "key6": "2QSMBG56DLWaELgzJNrqdHELMAT1xn85U2F1JkgEGdfnoXFBuV8AbWrCqhmeFtdKc9NU4MVNbFBCV9QGSdWUCf5L",
  "key7": "3xNCR5NELqkGZhqynrT488LNawcpVtjApPPB3sSSEVuxTRXd9eWoqDZcAA7RMGZT1RnCXLhAcEHK4X1jyA4HVDSK",
  "key8": "5s8VQBVfkLxn6YhsuLqejEfPDjD6fjPRSRHfkx5wdHEMo2hwFWnMcLwrMieSvtWaFE1CLrv9LnEmmD7vUZrKeQMy",
  "key9": "4tN3CpfwxFzWDYouTU41b3FZLKTGw7TDMn8pr1a6asqPymuu1WEGvFPnB6qMBLdwKqT4jqNpJ7ZjonU4y75HrAwn",
  "key10": "5EZMn9o3aw1vNdUiBDqNr7JSVCkmKVHJSKaYNTQUtQ5ZvcJoicR8vo8M3Kz96Pjd13u5GHPAiBurQ9akX2qtPhU5",
  "key11": "3mcsjrVL33t57bB4upxpuUfyRESH6nAUSJEJ4Kb2quLkBAR6ckh52LLoam3D52MaxKDSd8fcDg5rJn5ij4Kmq1kb",
  "key12": "2uWoaJ7QPMQKXEG1Uooy5twqsqkmC7gs39B3GqSLE9ySkMh638BDnJ9QpHwb9JXfnvnwKGjXujdgd7FpoVBUivMb",
  "key13": "5oYrWkHzzKLuk8EVguEsKKpnUsjDVLS6cycchqoYpuGMgKNUHNAd4J7qECx4qwosPoiu5LbsQBLN4cn6ndYKp7pP",
  "key14": "3WGd5CM5WHZESxwYDArQUzRzykLzDNUGuCe7vjqZfKqLNAGt99zFXfA582uHSjnNhn3LWaRDqJVY4k5WFNSe2gE5",
  "key15": "4caCC1MS7jBzhdzJnwZ22Ermrn76fPAMvEVjK45aG89EcG35s6iuguuriGZd1dC15tk1YTkc2hLJxo6Jr4hTzaYT",
  "key16": "4mTP7vYGVSemHstf3k3Tjvfsa1k3jKRQLmJwiwbWF286ssvAeS9P1eqzYn53n9xMZRUkkndunktXvQAvFUv6o3cP",
  "key17": "4EMUBJfB8KUF4gChLsYphhhgKhEefV69zMGjWzfxmA17ZgtXahQaDZiKVq1P11VUDNkmgh4tbbxQrRDniSuQSZ3U",
  "key18": "3mDKMMMEqKqJrb59h3cNfEfJANMuh3oUxKB6SaVczio3KoYesWoJ6PoHGxx4jrmj93jYt9bQMHe8yGH6LfDs9ADP",
  "key19": "5ewuuwLTX1pfxr1Y2W2Ee8K1fXBi23TxPTNtUcLVwus4H26wFKqTTksps2LC7oM6PiC3ZNiawLy9LFDt7HpTWfQ9",
  "key20": "3K3Rcz5wuq519R9U2icgzZfjpLqYG6itnPCZc36hAYaLYxDr2LUqPHjETBuX55ruZoLTyxyKMyZicsybcTBB7g6W",
  "key21": "5i7DbDFS5xBEkwbjyTToMaetm44RmzPKXrpfjwN8RSzRXrM2BnoLvvna1fhK5pJn4fKF1z6wTqxXhSEN854DNzdM",
  "key22": "2LpGqCfcyitGumDYrNLJnCYnfJ6aRqwp8LcHv4dETeWfiNKgj3SKmx3pxHvxcnfXWQQqvo3WW9UmkHoMqtJ4vTVq",
  "key23": "55JDXok5dRaN83HwsoZYkDPVBwtVeZs9fzCD4KSwHD55vVfMpzgXDTVodHycvFx2f85HugTW9sapbai1nLkvDsd4",
  "key24": "2BGzemdpAhdH2EWaTovCKGFTX3VEFqsK36neTzP6hhsxeTELrkmvyvdvYYe6qUbTbDPkSZS81wVRGAE8AjU9NrU5",
  "key25": "3d7sCBEWhPbV6R67Lc99aFjj1rBezMiKrSA6cgGSqY9bcms3G7a72sN5MQFUsn8wKuWBB4gkqenDE7c7sEEsZ5zJ",
  "key26": "3pLECaZAKmNCGkkiFU7oGHSz6ATNB2DbVfJxYFhFDLZhEJ95UWKEYrWYVGrEmCAQGNycRmMDoCC78fPX6ZEmsQnV",
  "key27": "2skohoo24rr4AGggkYwjHXuwBh63GK49zEnCcQX4tH9zfmKCrFH2bHNsVvjJnywKQFoPmjh8ZzTbKrgh4aNZkUXR",
  "key28": "YFFuHD2nMU6UCHcsFt5iZ5RCuBa3Z6yxSWxRsbEi1qpVtifCXggC5JQhdaYcFLfAo8ca6mTQaDaWRhGvoGs3ueB",
  "key29": "SkCz1dfzw7yik9uZbqyESBYzhb1Q9SGppQquK4UgsJQPTJLjG7jFYtVynC3viz28gRsHD31SFRmqCYHW3RTLhRN",
  "key30": "31qWdma9k5kd7syzsJ5fhgerwyZ8jDRhYriVf8RMnz81sewtG7dZeecLtjYNuzxc3dMjHUzoodZiKUCpvAdT97KG",
  "key31": "3NAaqc53E1Sbb96FYjq3Q5ZALSkMW5rowz8X2HtxDPhS6LqYAqsQtA4EhEypHU78YCgvD885JHhX7KRbQ9FVggpT",
  "key32": "64c3d61x7pmaEktYbo3wJGe64vX7AWbpUzLoEu9AmtbHgo9gdhhc8A8s5CgxsLJ2MJnowErCivSxocrTkujY3ZJQ"
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
