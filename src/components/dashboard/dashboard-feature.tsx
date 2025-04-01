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
    "2bKo2PXsrBRzg5GbSJBD38pUh4UmvQ56Q4G8Papo5kF813Y9xfhaaf7GajZM2mfL587gVQFisAkZZT1oqvbQiBUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QoBVjtzrrqhZZZ67FrruUUBhSHULgeXoL8PiWsE4nsFKpW3E6PFWJqDkToW2TzmQu5TLjc2DeKXNX2Ghoo4HuLj",
  "key1": "5J8zBvPix2ShkfKwscntY4u9kSt1ETgauWsECW6vGns6PN3Yya4nanr5Y1WsnT49R69sKi3iHmwbuZXSRvRBQnib",
  "key2": "4EHoEuXWo85KDPWcnkUbABkJq1AXLbGrhHmq118oazVw3X2eCts82GzYnhTjQQuEgMchVK5KkxvWgYNpXjxBy6ms",
  "key3": "44Ck648vAAkmqMjgpjvLhHiNWyEV4zMRmUWqgfKZ1SyKBhdiFeZULfiCVrbxX43LPm3CmykYg5WiyYFyP7Sa2mWT",
  "key4": "Ce3kokNCMFd86FFEEnnLypBaR8HB1fmM7nv2NkjJrfNhfNafK9k4uhgg4bUQJNBUBPdhM63z4imuCnX1pqfQiuv",
  "key5": "2qp561sdEwKEBanJg2zdaRA44riZk4tULktAjSjd9G6DEzHiVWu6VQLdgjyGc5xKxRCcXzwVxXr9KD4P2sznpV48",
  "key6": "G3ha3q5DBorYs6mWBZcDvqnNFP3BVfgW8FW4MCpMbGyKibstM2iZT6owrtsCM3io14tpp2veeCa6gXqo2CVaM9M",
  "key7": "3YGBuRXFASowKTvCWHHB5tEiyCDApEuGDVKfKVeKgAouKd82TbtvbPwbxxDHUkVot6m9gLSTrzjYVxdpjngxkAV2",
  "key8": "vXxRX2sZcaakejKeoCppLDmk6dxWWwCXw7ojMSw9WXLmRJCpUevKxM53CZGKoPdt65xLZVgFFSQsdB56vcXwmDv",
  "key9": "4EviaVMqBk9hZU4MTf8BRG3QKZQGvQWXwuvgHmaZ6WdgnyvZE9rMtytcyegNmRkpMTMFqZdm8i4vSJHqJuPA2mNa",
  "key10": "2BXjSkgasR7DbEw6iT9uwRHtd7eghMdMxMahpnLhCuQh9KqKHw2gwPXtYrP7rwqM5WfDkPLFJVgEjT6hsBiF13a6",
  "key11": "4uwYUQje2thjowkBrzTqoBfkssTxHHQDn7szWz2wHV4eQn7ur34hcAHWrzJdR216Nb1t7EbhJmapM3y2bxsWn3cG",
  "key12": "HFmEAmMuBQZ5mqBbASaWLprki1YePHgwzWEvkWprcu6uFmGaiiH3TftBKMfFQR7L3d5rG8HBByAtbDX4Dqv5YLC",
  "key13": "qNceKLFT2R7CWU2atDHFiWkbTauEV1TMJqRpLYptejcvj1cw9V8BSxHfayj44FRiSZeXKKDWwd4QPHmPNe7ucar",
  "key14": "59Y31AaLyneK3AT33gMePhBJYXqowwXfQ7Ki7ApC13q59UsDMUHnmhPhxCVLzxnMLxWQNZ5jXiimJUoG7uv3PBym",
  "key15": "5cREiBfeFfisabavHwMtaABSXFYPTaj65WBSjiskKHNfbpA893XsNzm2Y2R3mSe26fHjZQtw99sDQv4kszuYhzoi",
  "key16": "3Pgzap3vyfZJWM7P91EfZe3GNc5wr1mQKZtSg6Ujvm6KEnzfELDnAM3NX6ckSjbLM1Ada8SUVPELurU4z6pjbD6c",
  "key17": "4BzXNBpc3MioC2ArhaysRh6KMcztkFtoqG6XMBvGhbFK8ehD4W8sbC3dqfzCPgGt7Tki5BMssDbvtDsaYn84hqE2",
  "key18": "GUZJcdMwcT9h8emVqE22HsFoPvVhfaV4ZEpsd3aV5qs4vHABvAueTcYs1t3sD8p4ZWjcueiwfdN9Aw3XDEs9888",
  "key19": "2ZmdWQLTq4GfP5nqJ1ZBAcMQqY467tzkrwHx2ii3ta5bpMtC2juw8Sy34jvMd9Pi3hrQes6UDvzRFGJqB9xZbj66",
  "key20": "56KJpiyaX92heMNghPkmNto6RpTBJogCTYzvmuMBTJPtyUHB5L7cpZzTshLPutBECxA59Yrouoa4Y9P7JaggRxE7",
  "key21": "67TM17y5h7HnY6WVB8r2WFrr27gWMgZTbUVMQKJPVfvvALYTJNPdv5GWt5As2Pp63xvZntmogCZkWWLo6QvRcq2U",
  "key22": "4reFkte23szUo6HXUsLcJX8hKG4wurbjCX4vTKKijHxVDPKVM8EY21t5spyJywAvvsiKmMNSqcRL18d6p3iwfHjz",
  "key23": "3skav6HY65SzUqQqDmQyoyKFoKGEnxJaExsA7KRoEbjLuyiFFx8cPWhE4DrxYUXBiHYm1LKfcJ5hEmGNTexyvM2t",
  "key24": "5LA8SVnGXp13SC27SdBLGeCF2u61sJS1e1rMz94JLFSNW8kbCVbeRBg6Djof8sXguTMw7nLMvk8b32E61mo56eKV",
  "key25": "5yyVD6TT1h9Ddq92AmeRBLUG8FRU8Gp9xF4ocvpGTnvL4WL2Gn2nA8h1RGW3YzqPLcmKw432yNzBMZpwbYixEjZ",
  "key26": "4WVfrSbbUCTgF8Nq4o7GcLKsVSaqdj7rJLhv1r2ZSKb2CmNQwCapjcgmarAa2xzQdNpAKAbvZbDo7kD8u8hn6CJ4",
  "key27": "3z5FYeCivoBHzFb6DXxePJLepgxLaqdJvQTmftskQ5xgVhcqnDtBGXFGYbbYFYG9Fyfid9jaTa1HHqAZSPeUdUoV",
  "key28": "3Wf2pym5MstxEtv5r67ZKmBpaNxCyuXQ8ADDdwkkMGAqS9FRRfR3Ft6UQyLchm8tKZFneJr4ZRKZUKBFrN86W4X7",
  "key29": "razJE7DcuLisDnh28CoF7i4rc4ESW4sXYp2GkbGNJ19Fy3f5vstRGva3h3syPiEM7DG5surNPHWCMr8X7gyYykQ",
  "key30": "64Tiq8z5bB3FqUnUsqc51d1ieYL1zapdkGSJNrLoe7Mpti64eSL7FW6NB2QnuZAFPeApkVKEj8UMRgAwnuES1ANW",
  "key31": "58tcEdTsE1DVjkSLxv39xEsPkrPfvYdrCPaT93HQKLXh4jbG5g9JhZ7Z3oozyZU4MdgLPKAEZfmghGBpwL7JjrPM",
  "key32": "2UbeUghg9S7sZNAC1pHyqzCsP6e4thG3pR3dPe7XWh1hVgFebzqeZcXt4Gpc9ojWpjHwcV7AJh5TyKxhFaKRJQU",
  "key33": "MdMZdMhKT9GGuXXhZAHnPoMcHSDknkC6VoFa3rGLibFcnKFchE89Au9w4vLEQAz5C8wgknhPurVqxBeWgfWYeFm",
  "key34": "2pUjXyLJGk9RmY6YPUkthcnU4A5q1D9JYySbdfkMkHJtNHJEHR4NPHZix5iYBctU3k3CyM7EkLfQLwe6RL6R9cuz",
  "key35": "s8wVNgwf8r4Fwcg9t5sHwFoUVBAhtBwrz3SED8Zwf9saMnV6FxAPCrmduXWPGNUb4uxKj1yxMdzPrrQGgjSVwRr",
  "key36": "36nSSKV9gdofjpGWg7hppvDrwtNjsYWbMnRGbAc6icF1KxziMSAFhKEmox8W9XDBZYUVXWYptrtQk3T9Nbr9MghF",
  "key37": "5tjKi6hQ8UisMHLkRy9hAukAZJTBzXm1h8WYCKuGL59WwpAUtgCXx3HR7Ek1kMdtG6zSgaTQY2p3PAUhZPjzXzvB",
  "key38": "2nBTe9Vt5dfGLKgcAe5nfzJR55icZvEpee97acw72HH2pNR9QsbHrCvCfUVoRJRK6KBiHrNm7Ag5Wkv9Fx9eHuyy",
  "key39": "5NLvG61oBqBV1wtgfBRLDyDYFY5oSFQbkbmUdSPjJsYbuPnaZHm4wJSrxVhRAnxCdF4i5EceR9cSCdw9HmJEb6Do",
  "key40": "3dqNNvC6uD39c4Pj6YtDDVFw4bM5GYtdEeTDNmQR2VrrxnqHCfms1K1Sx1dMWU2zCcPatDEzbmKScvFoM85jsXgf",
  "key41": "4eJevvL6Q238sce33kRtkRxJQF2zVjddSQ67Swa97P56XNjwATfkrAJMbVFGREBwESVrvpbSdHfVC6MPyWTn5WDv"
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
