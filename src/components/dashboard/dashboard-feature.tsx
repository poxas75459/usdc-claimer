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
    "56GP3Tengi6cPHmCcYUB6KHKGkkWYGFdAS7T72svNbkzX81v6QXBU2mFjxmCqGin4i873kDQnTJKzF5aH1rju9DD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Zp5gw5KM1Eo7y113p8wzVNfbr7QodSW5cJVegyhhuAiBvnU1Xy1R4HkGqj4zVdgKp42k9QELtT1YeQhQ8x9FGB",
  "key1": "5tv8SEbcvyrTpbKzFCwM8fJGPEYgm6qubsf1v6GWHwWX7gMJoKMisemAk1CsnaQF3en4JuXtFrd7h3Y9vwVW9gMa",
  "key2": "3GUVJmvxkrbjo8nUxPFo7FpbaAJYxrMviKSrpPYBmiNMZ2fgzQaH2MbnjPuYqFyZHBYfTueLHvQ5tvYQrxvw1foa",
  "key3": "5LxgS9VoDsubEHBn8Hw7MVTWU8SdKQnGZrfcyGY1YDgWb3bGUpDNrsWYNn9w6iVM9or3xxYcjfnP3ckRwtxnNen8",
  "key4": "3N4NyugPvC5ExZcZuYWkH4ybvLeXT59WPS26krVLm1nw9YRDJTaTSaSAg7CvcZvxi7eupDaAVnC3Ft8makmWgAo4",
  "key5": "2B39DpriRK2Je54xmVT4mnDUsvDWwi4Ysr2bNJ9ZBBS8uEkq2XMePWkX3S158qJUAacZArkeiJ3b7vZT4Quu44w2",
  "key6": "rxj5FWQQYpfYj15nWYJ5WvUtHZzvSRkpATXrE6mfBhufgUqTEBKWhVi8CzkfuiSZ76Tgbgkp43ZjbfmCj7VdsXj",
  "key7": "5tTtDibgPYBqfBsXgvSTTCMvUKJUM6zF8vEDFgL4sNK4nTmDvah3pLRNWhdKNZ6PuNF4pVTWyLicMKdjXiQaEMzf",
  "key8": "df8EhMShubYx6rFrZR2hn2xBdfKbeAYDNFcPF9RtzjNvtCrrpDbeK12FBEFGxckMBjVSeXxCU1FvEQWTQ6UzwNL",
  "key9": "4BwArPYsqxbxFz3NjozMwwRN9wEZwobcUhJHLAtbQ4urGKZ5WvvbMST6WwAFPp13rQz9Hzd8shRCCE6TxhRw4aTA",
  "key10": "4U5XDtxFMoHrhNi8NoJTJUKGoDCdZ3ZM15ZjAbK9ZHKkGf8cRqPnZpd2V1sAP1JUUwgzx63JRXGuCqomhUttuFq1",
  "key11": "2KxrHn8KupUB36fMve8Lqi8ixAWgjiMq7Q8DC8xjtAoM25PCiyJWKaSUgiEoumDAzpamaH6LomLdF9eoz2bdtzWG",
  "key12": "5NfhZHTZyww4BgBzrCUQ9gYLz48row3FXDnmmAcBQ7GoN4d5P6gqoSUcyrQY9tyhFGX8UpEGFYf1wLq3pL91eVuV",
  "key13": "4XHUDi2EKy3kjfvVsqkG3eE1MQAZwYSLFZY8nYZDVCbTwYtroG5neqkziwF2DCwJUjvPyBubdsPJeSCfe987Nuqg",
  "key14": "58ZxoDAqYPWsfrLCFLuGQ2stFMzyoiVjf6ewUTH1XPVXXZBqDhFKpKZUmB7z7mXZh9EMFRrM1bRuKtJAvdEMnT5j",
  "key15": "5cdgAWKsW5Tk6YjdbctGeGd233cVSYHmKfKzcfHvsBQccWqjYzqa8XY6rfxGGwMPCFRYWF9fBJwa9G2CRagv16RL",
  "key16": "32KPEtVv3dNfvkoMrFjiDEcicVzZdrrxc8xdNkNeDS5V7KLYuxv1dhV6qohkNTDnaEk21aCCCtYbSfTNjvGAm5a9",
  "key17": "2Do5p4RmFz2D93g2s8xL9WvtaKbP3VwzFHasqBM9edXfAX7h1CUhk8ZAVNnN8r1oFV2VPn5ReGpo1j3MgBxSYkr4",
  "key18": "5LSxBUYkBMfeSDF3xuDbu6Gi4kFCbi4f7LSbovauXc1JcMqUNSt8v2oYzTSmfR5jbNEHUVgevLmpNPmRFDJMBs6e",
  "key19": "5CFwhpBWHg7TCQbw3pfdHrimb5VabFwJCjnw8tLM7qADmsiaMN2GdY62aaGtXTudRNVvGzDEkhpXySL2PupzBSgW",
  "key20": "5EcFARY42tVKNKAWDRxthKoHQJTcS2uyvxHQadndqTG5zVfqQ9PdmudPd24YPZQorj9ZN7psAqri4qRRh1zV22kj",
  "key21": "tymd8peSg3r1iLMyvU6pqTXCUfH2hNDx6yZDfi5UsBZPPN3GQAJcZheRW4vFeCEKCDk9QcVTnhCekr8bdG9SumA",
  "key22": "5Cqbf2Q3r3EEEm9ABDYaRz9HqvohJjNvJL4zasJNXwaCPTbsT2NCajMwbSwXZs5Q6cHnUEdLwAUdz8ist6E6dnG2",
  "key23": "466mA43geJbh8Ac7zwq6XoZ9PiA22WRCgNmAKuewRneYrbQukktmyTfFEMK8sJ9x2AsaFA8T6iFGtADENY1oUcig",
  "key24": "4hGxKhz6PNvXE93sEyydPq5LYrGiqLpCQkjjND6PJ3RpQdS7zDJBBm6ip17nSszLaj7jjtdpDmwX5WVm8YFLgn7F",
  "key25": "ZrzJGzVZQSxnhw9gen9yaagtKCM3e3RjP994AVkQnWBCsSeoTHQE5VYorN2AqXQZ1cDuQz6LXWGhJDFjnSbo4CS",
  "key26": "4G9LXczHL1GJxZgrDS8tXV5Mja8esMA7AuiNcEx7VGripLR1qK7iGPioPGXeSSd2LcrDgfhvWJQ1aa62A3BeEY41",
  "key27": "3bZtxjkMv4dEVAYTE6PCqeECYhEZco2Aer11nHzz8tP4wPUckVpLy1mf3sUMtAz8SB3JaygYUfwygL8bbavDvqeW",
  "key28": "4MdnpLhgJs7eLdMJWE1FtsHrLpEt335VBFsgqYsEUi9VsV5rgdf1wdrJwCnSDRu1HkZUtj5BtWPZSbhkT33hj4oB",
  "key29": "449dGon7bkYgX9qaPTxkceFTzZ6garQVMFqX3CMhbtXCxNkYJLAfnrb3UFyCi4Hf2hk8uJ24dMwC6LDP8ET73Gza",
  "key30": "5ya9eT2nh113vPxcTTdxsHGRdDe5NYuSHSLCKcWUKjWcgDEGSZf3DqM5jvsWynzqNod6P7mRrKYQ8dDxXFWVL2eZ",
  "key31": "21UWfWr9P1pwhwsc47chGA12xvVQNgPGz7oPycKiiyt5rDNqRTNbPbquz48yd8AS9qJ7CJmaGvPCcEG9e6ou1996",
  "key32": "4pcA51YJhT4AZYPjM3HJUAZNWroRS5Yy3rArgQHeLtm9BHmXv94ba79tBjrrGM22ePKMTkMvAxESVcT5HQ8rug4J"
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
