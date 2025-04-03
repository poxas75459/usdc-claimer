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
    "BJbzZRAYfMKFj5P4JcR1JaNwcJhYYsFJwr2M71ssy8Yt7DcEpTR5LWQMZMsZMgKUGy1MY3KLaMH62DDdKRfsHif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39ss3KSMDEbbR5LUPuVwebPTDY1KmPfWXNjLgHTAZetsYVtKDVhcwVKs8r8dQVpcuFnmUdphkwuLMkxxu8hUwYTC",
  "key1": "3wPxTDugVr2yChnzytoctNU52oZW8zsPh921D7gL6NRMa9hMAB2tzJDNXdTb2e7uCWAqWYCn2apPXAFxarZMJmyG",
  "key2": "2WvG1j4kpBQFWwLdbSWRiPHMmvyApnLva6BEpWu8nYv9yMtUmXpzNtMuUTYnqF6P8SbRwyWUKUbYusf9AkGgkYux",
  "key3": "2f6NR7tpCUcJ8vqyPNtoeERM9EcgABkiH7jgk1mng5VbJLAk117RYHVpamUqVkb3c2KzjBMq8w4xcLwm8scxWRQ1",
  "key4": "4ECzf8Hs8aJTAXoxZzCxPW7AH1bdnRXZ1QhntPREZkYqx7y4GqHmW43woopFQjjb26pMPUg2aAJoBqWWGW22jJQ4",
  "key5": "3ozhE13h6hpEMYG2KqhVZsTR6X2Lh1QgTCDmS9KuPkBfycgb7cAhSC7YtAxWvvv5Hr4Qj9BWJtp7utcc1exGFRkN",
  "key6": "ayCVLaA6WRkCGBnnzH2pRSEzBh47HZqmUF9BtJrvRtT2WU8Rno9ZjaJ3wML6R2W4M1aKihBj3aNGReHg7MF3VGK",
  "key7": "3KNG9r42ARznAd1HtUXeWioHW2WUAcnWnfp5Ry5KBQCPVDCf2k1DA1nGac8UggWnvrM5aFd9NGnc1QR4qw7Nr4vM",
  "key8": "24ajFik9vE8s65tisWfebG2C9MJdMZroC9rsHdFVYdeVnHDbP9oRQjeZsNnudN5F9L8QzsACm8LuKkqVpfwr1fpo",
  "key9": "3duRYsFw7a1ZDwehu423R7BQ9iiB646pEJ8ijQcigcwQWCrAvfsuA4epK1V9Bwv26BA1yPAVwipKjLid3qsUiFa2",
  "key10": "44LZqW6zWcCMqW8nyUVXbKiLAtuBZJt8HPRm3wtSGRvgcQ5UqbCa9gAFKFoYBig5NqLKLVrrZ23MjfDR4LqD9hV4",
  "key11": "3FvcpWCiKEZBKQyPd4eZoKYDTSzzib4kDNq7YmfCLVw2Aw2HByYGBc94NLmqSmBA9fTYLn49ZFAmyUxA9nNP44Vr",
  "key12": "25a7BVfXM3G4ZworD2GAn4Sj7ThZzKVHzghsnWcLkZXsAd42XQtgCN5YoyK8kyBL2sucr8qzBu2YB775xct7sCNe",
  "key13": "2wTqn6RfFbbK3vV43CzFNpTXLRnujgJ42UEazVb7rVtdVkx8VMf7EtJJ3T7azYQKBvrvCkfGJoHMzSySeKhSdPb4",
  "key14": "jFggaa9bjELjZTevfitmssagfQ94rswKJfcuG52CQTe61DBwhRMCsbCBv9qK9RZGm9GaHa62UELjVUEJU5RP3CG",
  "key15": "3sfTbQF6PqteYkNu5mmKUXtB11qeopzSjUDwoX6caDvyvcAe2U1PtHuCNNNKZcs3tLcaW5kWrazvrFXao4C2AmEM",
  "key16": "5Q1K7XXs2VVUDycnXh8as5pxusfN8eLgimREHUfegb3Rp9KbC3urLuiMpGhpPW7vUVw5WgnMbwcQrQ8x9eXT6CMv",
  "key17": "hN5BMSmxzd2YEvouvUX2YL6DnQmkUA4meB1SZoGnMX621kXf26yTC7Qtszgo9VrNbGRha1Aq5UPScJcPYMwMHZv",
  "key18": "2Jzf1qGSTKaFVJeStoLeo8w2rC2jHBvvMNC16DteLsiiDdwsPEDfpVBNf5SLrBb3oRoM8c2dSTJ2hgJuPLJoiVuz",
  "key19": "AMDjVgfcj4jMM9b6qHSBHkhJa32BUgNB3mfuSEzLp537UVhDRTeGnPmg8tAoePg13vrtkjcbXkWzznNwyPeep49",
  "key20": "5s7jyhTYW2R57ggaBWS5DWeMWPLd2VVuaSJCgGAFVcS4dc5XK81JmdmoW6K8fpsUoJ12q7nvP7ikSJeFhrbkAhfo",
  "key21": "3YNepxzhVCpzne8t5s3F4RN7ZYDwJRec7GqmxCwqz6jH6JnyUhffbZzG4LbEjA5iJARcWWdzEVGXctXk4ejibUEL",
  "key22": "5uDYjq9DaTm3m2EmnD2g37rgG7YN3TPEoPNSrgYt89dy1mHYYJJmkSCnH4ugYqzFz4ZJvTwHWyFfD91KBRg6MNWz",
  "key23": "2yuEbVRVCsCdg4N6ETo3bw1251C59jjgTxLDLrJvRTQ1PdB5jQpXiL5xRiyiotZormWXgWbRMbNJfMiDLAxFnnAg",
  "key24": "3p4ntTNgDCUJc7ye41tx4rP1rSrQ69iJx6z3gJYDgXdzU82NALLtsHnExtoXQBB7YqneQrpLSFADAEiAYrepqwGn",
  "key25": "2dXGAhqCKxcLcrSiEzveTSkYJHG9wRTaUTin2heZtiqHYBsnsHfFEpEQkxVwY8mCSpxcidvFVs7jLaBCFbtiJfeG",
  "key26": "4T38C36gCVfAuNXu8TEQYtkHVK2YuVzoyEWXwfe7KKGEt3HtwGJom5AmWASbahaCNSi6gyPddRykTzE3UQBsdEpA",
  "key27": "AepyGutvmuZ6pZqhAm84o6qsn9r3AB1Nvuh1o8JsDaMRuMArg4HeFvW9FsaxxoG9JqGFDHq3k7GAAq6457jaS54",
  "key28": "2U6AzayZfNotvneBXpEStCMcy73wveVf9W8zjUoZ8dbDk8Jx7RGecpZiCqPAZU6adYpHDv9o1dLmcizvxMkmeoL",
  "key29": "4TL22YtbXq9GfrexoDVJzLn3NBhTTwjkEKczmv4yGW3YZqeA1n4WYzpEvgR37KRpjSg2JYm2i1nvytxpbQcbZ1sn",
  "key30": "4EheYS2ufVB4ku7X4hmNtHisSNvsUu3gE2iFbMFYejYVNxjRhqDPS42HF4mdktsa28WgCyx92p5zHJ8e6foojfTL",
  "key31": "3K8Jt5pRpY75rhUWDfGHMcDMSrWmgoxeAadLPoCgRe7chZKxM7br1ZSPuA6UADZUbNGoGXuJjLurb1rHCS5qigSn",
  "key32": "4F3CeRg4GD7tZtupYsbutScW9gTRKzq6kCPp86h9nV2qcBRnrHruRLV9woy8c6m6TmA5LztctiRQnN6cBqjWo8PP",
  "key33": "VA6sJvdRJsBQc8884n4miKiRjWwVNtWV3Ku4PbrXLfE7jFBWkCwRfZrwsdcVcM5Ab6qho7AtXvvyWMeyTPBpEsv",
  "key34": "4wFp13cTbjSJSbfGTwWMDv8gDKuBPEotz3ubjh2Z3DU2s7nLLne2Z7ByDVR6N452D677d5v1NDqHTsqFVh3nTNig",
  "key35": "26cn1FgHmzf3kLYfLkWEpo5ny7ueG84CnPH4DADW2aT8Ymgew8sGJzR3JbMgFs9Cz3YaKdBCE4EoJXWix1AEiSh3",
  "key36": "2sHvrTwqkGVAzNhSCiAPc8CCyexRY4E1JDbnmJMhcHeSqeZR3B9an91y44syz13rsRnz9rAmJnJZtTKhsNYYBSQ6",
  "key37": "5y6T68eFDZebhj59EWQiHwHsK1j9Qwt5oatPpbdo3hcK7KiKB3r8FMUtRQF5VagQtYHptATCRQSVcGzq1ubJpc4n",
  "key38": "5yEQs33fJPakzW7HNfd19CDgXaekshARaD8kGR4cTwLPpptojKetn5qLKRGh6fKcESAxPGY6t9biKcuC1yavGMVV",
  "key39": "5dpHw4bHzf8Bc7CXSaPRNQa1bEzBchEryVxZi1gg16fhKTyF9XKdNaaidxgUUWATdLMGzdAmq5jXav9GrqqjRFQx",
  "key40": "2WMaxEiufA7pz8WxgF82UijUMCsXA1qHVQXZrT9Ue39pw7ixm6LQDu9hyAa9d5Z9vnV5judYEUEydFUdfXkcbzJB",
  "key41": "3J11MfQWLKhkjpb78Mdc5hPnyhCnAftmtsAfGfVmEdHNcicrP2NZMZrdmKTPChcdmRH2zu8dcC6YdeVmTPPLyNao",
  "key42": "5y9KPtpzWUTD1RixDARhTYPy6Bsym3dufy7Gb92ipPMCizgkGe4CZ6zNFCDaobkmKSD8yKm9SbMTLqJSWuxvqjbe",
  "key43": "4CKeQjxpcHPw5jeWwJJ4mxA73ZdH7qeY2Fdi9Tq724C76n9ctRPySzNjpbZTULPAbwbTPkPC32aNVRSQbvmF8mbA"
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
