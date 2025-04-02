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
    "3uE6715Nn8uYpMtYTRs73sdCUykEpfezvrAAA2Raiq7kJ2hREK7SvSNQgruL7pgKFcKULM9ZpxGf5Qr7fWS984yD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jWbaRSkbGaskcfYZbvdif6pTcMheECFYoJyWJT4iJbL9rkjCEPXkY7xpfTqkNfHtUdmCrdBshSrQrJBczZuQnet",
  "key1": "3KD2jwZg5Ndr7PoxiCCga5DefVyJUNkpgNzhbuhgRDtpaxgoyRN24iwtVBf2XbAWQTH4ejjqyVR6JQ7R6mmhFq2w",
  "key2": "33CkhoT2T9UxNZbJuPXDpZPaDr8uZ1vhZrTDq4oDtunXNqq8jbum2ATREKxCvqyR3PRpeQbS5TkwWdyJ2oUGZsj1",
  "key3": "2ZYA1AEw1PC3HvJKtjX2iHjpJieXqRUXEGcNW4yof3AQA1DGf3S6d1bHvbDPDFfgDjhe2ewcDYZ76PqbukjZHFsP",
  "key4": "389BepqE8HgJPyxQygYxHUB8H1NddH5JeZfGHR6VqAZAmZP1Wq5wCKJZWb2FdrYvLrXApzaTYV4gTBZq3QesZSyC",
  "key5": "mPzQnHVJd3oQ7buSTC92h5wyu11AfXkT5xV5XQbmvHpZbqD94VUCegRxRD1VcqmtorREeuF8VBhoKJLGuhnLyDk",
  "key6": "2QgJzLU8v6NgzwiZd3Pkf8Lo9n8dKMUawf7usae79r1rrYwTwhHb1hoRUp2FGDvtJop3ha4qy6TSEoUVbutnNLLx",
  "key7": "3GsV649vjf1DhYdjBcxKPRd4vJDuNsudC36Vz4oZb9cUiHsJ8K3cUg83RoH3sY4oPhqKsuptUfh7R16mHaLt9oy1",
  "key8": "2zsFf3zHHWEJmy1pmBir3oqGZVWXWhaWRaq6XxWq5g5Y9T71nFzoj2Rw5HNiTrNJwVpshYwGRb23UC9yFwwmobXA",
  "key9": "4sucJMSHUVwYgJsGqCnbbra5ssRanmnGCoFJTQ39zi2NpXPmXLB6tHVpNdssfaXPoU5gGnevE85crupCfJNtDwb8",
  "key10": "5MQaUjVTkHi1HvtxcNpgSka4zPfCpQ3nniUeo4HRoYnGSDjxcLFcxQRBz9huF9M18K2SAknQEMdWWGnou65HGTvh",
  "key11": "5bLKdPQxKRyb7Eh4cmazrqJ65Np58yCcPytqSG6tnDjPUEuSUoufwLpn3k28BFcR2kWb8TWxKLxEQWSUqjYZB21B",
  "key12": "55aSSvtp9s2ETXSJZpKW2U1RTq22zwMTuP2Hnd4HbM9TunvbPTFmZw7cmt3FpYo19ou8LyXFB6EFhwi6Fb54MSZx",
  "key13": "2yEeCHs8GkXeDNRrpTwzyBpuUTUcd26vj2sG3jUMLPvZnNzFXVwaxwcrpjEkR74WRp8sDsCnVk9WvqvMumuWDFe8",
  "key14": "WL4sxyQ7bZbUWX3ZCQuYLRzMpCNGNdqr45Xm9RpoL1Lp74c9TQFpUno39u3d1rUGGPFGwnFLDQxGVnmSAVLLYBK",
  "key15": "2kLx6H9BE3D51dqsFXwvh8Z4njqFpdcBGSrWLBGnoRmHA3aFLk6nt7VGZ49t8twNkBHzRYjfcBRQULH5m7CejxBF",
  "key16": "2KNZKjXm8exCxpZ6oxemrAey7uH6GRKwyJDouDLLBLq76GxfhCKGn7V5ycN3uC2bCYM7Ek9WLGgcpyMwNMinjRoz",
  "key17": "uU7PYgoGvXiu3mkzanWZWEb9gKuEQkktrYnYhcYB97D72uwnLxqJqy1TLey6zkKg2dTie5ibGAkqWTNtKxsm5Wu",
  "key18": "CXBZEib6EGoD9GtgW1pajCdVo8woJNedQiG4PzjBVPcSQvJ5WCchEw3SD2kYrSPLqWX4MhXrwe1PQP2djLL6A4U",
  "key19": "4Qop56jcj9nx4aFdhHv5nUo8B3So8bi2wAQB8epDxiU4gEkyH11U6MgxNWhPmEuQindTLYBVkQZ6uGb6LxEqdD3p",
  "key20": "5AEf3rvwcP8b92sELAjriFdWYtyf3HWgHG6ENT3BKw65apN8qUMDNDz7249jyNCJJTKjdUNQEUPCkLTFnj7vUgUk",
  "key21": "YgsVUkwK9fo2v7YWKdLD44otouZ8LyhvEVK1Hnarsw6ghffHbs7dyxQaJDYwVGGhihe48MhV7zBrCQYqAWjXCVX",
  "key22": "4d1cz3vHqWMURejsdDSDTMXwvDBYdVuk7joTRxTP2wvFGnqFGfBH9RTDxkmnqkoQESVjBzT1osPHhqvA5HsTYNik",
  "key23": "dDHjzBLGhC94wxgMjf4EYiR2yyeH1bC2AKvUhyjB3cu1Spi73KZicdV5RoF3PiaAEKMgjdHvBMpfmDDDaLFKW5v",
  "key24": "4RMk9JnhB6opvKG7v4f2GsdFw1TuH8p8EQFG7WuzDgzzMgNYgvXUKbnNsXfzmJafgCnTgY6gJvDG3u7w6Z8Wip8B",
  "key25": "5pQQKjJKsuudnAocgPwzgoLZaMaFp16AgcuXoZsKobL9yXCDQxEscG662U8yoDv4Gv2guh3mazkkqaEHzbcga5Gn",
  "key26": "3Dxpv7Q5LffgpFoVF9S8af1MNhM42dATwBG14qvQ2M1x44MFwzfckfE6LJwMMe2NnMiaBgLhEwo9PXAt7HkMT6y1",
  "key27": "2ZUnYkNG1hdmxgnNmGNofeaQae9hJhUitQPGhAan4W19CEJcUTHD5vjWy3U1efS3GQ35eHxAreCvC2RT5j9wwTSo",
  "key28": "7MU9UNLyKJ6p4hdceZwWfXbX2FhCRfRqpxRsrXekmU2F1PsmCtVrUR6ausFowL8C18r5tMGpRanh4wUdUmN5L8A",
  "key29": "4QfcWuYQWiJ4EuMSp8WvuXzC8ZsXhottqvmHVmJv5L8tEdj96muNgewrEvuzaJ2oevHJPje9Fz1kzMUTcDZv2mza",
  "key30": "tGEYjffE7rszYYMnrXddVR55eWKc4Q4BA42LEx2L2wfRHhna8VtvyNY7Fzz6fUh8UVkU35EEumE1dHyZcC4qCue",
  "key31": "W2cb4vHn1TrEguKCGsutwNhBax1Aec4g4zu6FRG8vqH79M4vj8cKq3LgRwdoQQaiffvPoNTjEgxGC79kfaqH4V6",
  "key32": "3Spi4Jrbf1ZeVCLF1AzjH2FZtG1DygkCJBrTjcQc84NeYZHUzcuHbzuUAMj8xsWEcDQdA5hJKFuQrzxjxjxXqJRD",
  "key33": "5fFkwa9LAr4vrp7cCjVgsD21QYt2V9AamadF24n7UERfPownyp6FMf2YfcEmwpcfwWj6dP2QE4jotFk5GmsAAYFK",
  "key34": "23czEFxZRr2bESyGzFJAufRnQisQ5QDF3naKMrgggPqWE4cRZGcWXaUJab15rKWjqJZwkPr7Sv2PVfvoiAu2sNz4",
  "key35": "2DUarTqNaAAojs79C6CzRR584uTsurFbWXR3iMT7Se7bvjqAMUbdQtvMHoz4oHnxUXAFCZn86h6rD2s63GABZtKd",
  "key36": "5XyXgKRMbXBZqJr6KMFRZwVMDkWhcueLtQt9fQWh1EqoNWSWMsdkoFruk36wKS6jzHGJ6vGWXtvGuXM8uLrUKJun",
  "key37": "2umLFcTqefPPHXAAcJvWSUdCb34trgW16fkjrzgYk2gQ4ddvV2T12zRurzxZQbtSV4omT2iFswYr9VDTRzrbJS6h",
  "key38": "2kDmPyWdM1yFa52sgV2V6mMmfu8abDGKGUR48tEtR1j5mPBCwZTmy2JPtUo2rt67BBE35CmGCS87ig5kwJKeKGjA",
  "key39": "5sn9zA8Ft9kvk7HfxwcRiTcm8dUsFbwUwFRQR7jbH819CejnNWFdjF94HEbt9BYSoY8uq9H25RnowpXzLJFK5VPV",
  "key40": "3Fsyx2GivvA9QwsdANuKb9cfZqSdLUgVFt38FStTLsWroJyet4YRAxoaXKGwaXj2KVPWLEcWnbZ7SdSnZtma2kJw",
  "key41": "YWXswgtL3pQSfj7RUCsojg1R3opv3VUN92y4xZgRbgzL48bYPTkRgm1Lw9pMKWw2dV7Usj32wDxqaNDxXuHUBDr",
  "key42": "4gheDowhhgRGpd2m5RXR7DgXkbLAByRfRRadx8RHXg7Jr44Aw5gvh7UfxTgPB3e37ZUS5aWUgyNkua5w7hPcPUga"
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
