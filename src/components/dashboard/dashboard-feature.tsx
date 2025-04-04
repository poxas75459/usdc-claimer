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
    "2mvYiMxb3SjhgmhNGGSgyLsTb2JKAu4gTc6ziGeHiNHgY54WzEoVLNSVUhCAsciprTfKXKs4J6gERXJcA9pohwHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wGRzb6Zo8HrNZTtce6aWsNWqSdDNu2rNYcecyBviu8myHDfywiD7fJ92fxSYCHVxvTDsHDeV7y2EM9XUcdeABk5",
  "key1": "SSYeadAN6igzhcCL5PJyAehsrx1ebuDNKrEHgwr2qDQ5Q8UPwLKAmcrZT1FrgM2py2YQ9gYXGjdyGgLowoDaQX2",
  "key2": "VMcehHeHGowPvizjbcbMPjkjVJtewbBM7stFEB3AyYJtxpMEKaFsE94XYYmKfBfFFCcBJkYzrGdgnvpPApzbUSP",
  "key3": "26WuhTCnnDUAL3n6m2EPuiNrjWT5adbBY93nyK7YuuvME3pg4DtSD6WeQe1XsxLTCvVDktdzPL3z4EnmJ3YtdF4s",
  "key4": "4so36oUi4oteoQo58RayXHemJPmntupRniNgfBFkHQ1q2JbhifweKALmaoA7p3Fu8Cjy3uSry6K3ruQABG8K9uTh",
  "key5": "4uhxqPmPySVBRrtaj1RCsKQXYSYEAkM3kBpGFehooyNgDyhs3BGHozZdttb3TytzBjMNZCB86TwHPJhCFL6LWKsv",
  "key6": "4CaRH9J4zftPWWWg6JpTJAw7si8n8fkwJipc6yn7d5WCMjjWF7oB9cwZvBKYPo4Qdua18WGPphknXPBPRxJSLjqi",
  "key7": "4NYpsnmNDqAJEAyNGZQ4arcLfsZfFLEYwiXTPx3m6TkK9hHuPbpzCBS49JMJaABgSqSjLzasj2ruJPhLEqFdUjyr",
  "key8": "EZbzzCim6RwJ2ovroDUJLmP7XKoAox823e7d2wDYfZhGVds6Y7H43VbgWraKFUfkb66inLCCdo95MqTvkvTG455",
  "key9": "6MtoCu1R3LQiH36fPzK1hvNBt8dkVWWn2S7xaU7ALkQxD7e1oWiTSk2HgNajaho2xsr2A3h9FoUxdcH6vwUPJpk",
  "key10": "6aCauFq5tcb1u2CwCrpWQrPw6kF4DvCpH1vKgPUFH3jBTg76rFXJ2qf4QCXS5ENXNDFpcELN6L2VSkSoo8FZwYf",
  "key11": "2EdNS5p8bmuXkxDcwNKYgjA1p8joRqingU1eeLavzjxMYV5ziFLjjP3wybD6k6SN8tuJSvXrE4roTE7aUNVhjUMR",
  "key12": "2u4kGyrQefXqeMZBn3yHoqiHSBwurpzVaKYTYhWxjwR8PDgmmqDchuwNSAht4p7KehLdUAE8sx49kq272TnfL9BG",
  "key13": "5odHkLwgei9EXbVm3LUCmr9JXVvATsVRh5wDoS34EJm2XuxJw6btyLV9Aiz5TZtargyDPy8Q8RQpsDShMaewCCm4",
  "key14": "3roXt7eYhkzbbGJVfFiMg588FgvYmmNbNbD5ieJavzfDyaZB7GAsBEakCbDDpRSRZTeybUeUQUsML8e4Pk2X63QX",
  "key15": "3VHVN33T7ZmyJAoUbDNt7cpPQgrCCWycEFHJyRgUQLT3sJ3NrMJWMk2oc9xXcFFMitPGB7H4VtMvFtZ2fiSbDQor",
  "key16": "4uHKs5NFSiEbn2L9AnBKnFLWXPJ4zPGdH3zNu9d2nusCosU697uJ9GFd3snDPYeYsUDCJnoespaqPw5Ma8wnQzCJ",
  "key17": "pZHtZcW3D1pRph2LFmpfCEFdFcznWwP7ei6hyeiw9ugronbKQeyxoTYgQoSocfZEUA5daqDDhCCpDJdhLbRU3uK",
  "key18": "4DaJFaJQTPvnaLf74PXgyNndZrzXLmP2rxttsFraZ65ZrfZy4yz8ebK796orVb8cgNTyFsWKxZafeftzAD6rwdno",
  "key19": "2WNbPhjJN937hUvFWtoTK9dDjBpoCgeQ8FTsPMmdq7RhkRF1sP9NCA97hiyMCsnHS9KxUQSxdTFDbNte2bw35jvh",
  "key20": "3GBF7vBchxX6gPLUmQBHVWYxMu4SzpPfK4bPw18HCi6223Dk3gvds72rv59EuFJiZ4GHSRYZDN1QC7EHgKV1onAq",
  "key21": "5spKH4541cWvqj3sWXZLWk52QUcykxpF3ZwVZ9TrpVwDMWfzdaaE82NhVmtYhCbRT6NiRNMmQhxiBK1DPzfU9ro5",
  "key22": "7pPpp6kBLYgrdFkNeC2Po6owN7zMDT5QfUWmzb2Uxb7CPSEhrGdMrdKZBbu1qBXnr1ELBBDQ5nECcSFXCpycFup",
  "key23": "2duQsFYkYiHRMffdghDG8vDFgxaWnvpghrn6AJin1eTXHJRz4PRq1tJHtBRMk6gWfjyMKCXYyqkQdfr638RSpimi",
  "key24": "4PEyJYY13CS5eeH46nw1ZMeKCF5Dcm78bsfdvELcDZ5feYMdTHkVngJpZxx89P7ziY78CcqrEwYH4XL7KoHt8Pjn",
  "key25": "2XXu7gNF7s1THShh6iwnakPacgPjHQ6PThFJZazidrw2uvE6B7UMZJHWHFiKcwnH1JeTFAQNwzBp51wxFd9nT4PT",
  "key26": "3CHLP114y4fy3hiKd2nSGYeModFKpGEGN2fvJgUk6dvQnCUHXACSQS2KW1zzJwpQDzzhaNtR2pZB1HhQTTNvEqFV",
  "key27": "4BcEW2bpqqDJwmbbbwEWXJpsJwHPYtZo8e4qKLuyUpHKf9yS24KTATM25hbQMau9pPpSwkVFxSszUUQ9yKToB3KS",
  "key28": "55oW5YpSbGQT44qgfTQJPNMteCXT6tpy5gmeJp6XLFkhN23qXhjrpt2hJAwsSAK9cQhLswQWr8gaoJQTFtZNBkge",
  "key29": "5Hzv8hqwRUAcBAhYzGYncgCmz3r7K8J2gJswaERFmnkxH1kA75jbVDwEQbNajtC3fhN3g4VhKJzTpfjgAcxjJb22",
  "key30": "4dD7fLVwhGVotWaQ3mQEaNTfzHfWAREruN9EPHxjoQ3DS8dwJHVttX7kWDjzD6ruPH33C1nNrSHs8Wwj3e7Be4SN",
  "key31": "Ze2zPdZiSwuHsKSvaiVfLeuacMu1rCm7E8YrE8511u2hd6ZnT8NG461QYoz6M2MnwseiPZxzUoursZxthQrr5Wb",
  "key32": "svQT6LJW7vQjZvg15ghYsBmEPEzDwztktct29WgHeVi61TZnqaYjzPsBDCGH1uozAwwwyR94tRbX8MrwrZk3rLu"
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
