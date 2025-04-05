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
    "2Pnu6T3yApA8xs6eeJ43saXmi3MnfdPrHaSpWzffAdN4Kc3LLYi1BHRwJucyJEsrSzxWHs9cXhx6HRCzY2gLum3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NZPVSVY8QtbbpY6VfgkjZWYhhXYf77PYu2isswsD1CvU5hM8oB7hf8myYDRkoVUZ2nmK18H6yxKhUrs14gDSgX1",
  "key1": "5vmv8cWNfTFxmQpat3B5sADJjgt97SpwzgpBDWrEfGsEsMC86HwAuraAkURTB338N28dkvtydSh6MWdp83b9rMcr",
  "key2": "2qtryyYrEwmShFe6sXMbMdH1qzgHTknKioinx2YoT74yqJKcLaNhxb3abaENivpG9nnfEnK2BVV3wd6hWQu6qBZH",
  "key3": "5zHCxMEBKW9YF89m1Ui2dRWD4y7p3mDTPQENaapi8wdp6Efj7Wt8NgcSWTNbE21ZWgXqDbjMtXcBgj8Hprz45JSr",
  "key4": "UnN1AJUFT3cbYW7G6KnvVkTYKVFw7B4P5LEpNPCekaYCE8Lt9sQQSMHGKFNjaWPPWVyHxE2sAPAhS5KbBD5QhQT",
  "key5": "4iNpjmgJibH2AAjPt58Vbaqz78GWE2Uf4xPaPT79GpoLXbdhHiUcuwrduZH3uddLGWLHi2DbNHokkrAxszLgTsFp",
  "key6": "4CYvzxoVDJk8oCAxRnLy8rQmLhjDQ1hhkaaTwdMwzgAjLgDDyAzN7ZcPPF8aouZ7u1xBPntsfdgbLXzZtH93dzrF",
  "key7": "223Jsk8zZMpkJqJyEPi7Zpfh1iZeETnwxRxwgR9ZUdKXqYPVcn9zCNLBCaXPnvvhXq4B2P3hUJVrzkAfszfyNExS",
  "key8": "4qVUakqWkpyhaJZeXpt9ywfrdtNsGeiFwH3WWVS5urYStzt8zcE7EEhhqzG3LhsJzw47xC6th4kGo1CNCVNFqWcz",
  "key9": "3xe5Ep3irh6Hp8LunBYtk2bBnmbfQ2BMiWDbgrR8kgRqq64Cf6WkUDHeGULDp47icm7Nodtg6JvrYxbLSFBacJY7",
  "key10": "3Hun4JCeLn3PVCaz5mGe1g2PrhgiQjsWjhEEogtKkLptB2BB6SvVy7SvyGRta5Y1ZxNeHt8ph7PkXiZ1ovWkcNgE",
  "key11": "5AV8Hf7BThu7fSfHJLN47c1ucWTgYStmvYPqGpTUQ7E1CxuPqUjWUp4rr9NMy2D5WcZyTDk1XWH1RisVZBc9i1jo",
  "key12": "4vrVtZzSwfEHYcFq3Uy6U6As2FTEjvLEh4VVmQTQ9V121G84YcHv9jKajiVWFLYYqhG8CEyAvSWuY1ssQ7pqfV8x",
  "key13": "4LuQiMRXEm6ofDd9WtkA6J58SrZhssmCCC9ZSZfb8Xj1khkcLKF6FLgxD7GTdrS4pGqvheaYXVuw9VJL27JAMwPu",
  "key14": "3ydJzP8k7ub923V8dYZXC9Wa1qE4dDNt1SLfmWzNKibM6gReGv4yoMCzhbe33w53r9hfaoDXUcVJnZ6mtBxT3PDX",
  "key15": "3cy8X3A5FAY5Kyx61aHbst2vaBfUeqDiVtV3MG2dL5rdYZtSnSW7oVERnKcCmHSJA9sbBgz34wN92BCZfy7Mx3ZA",
  "key16": "4eaYZxtisEb3U8hVYqzyt18vGLBmpuCdcUtoH6swXN9iebRQN179XDQ49rzhwLDwt3iE2orBpZwc9BBWhLcHY57U",
  "key17": "3UANUD4UH2aaphKvdTCkfRuGWbwXSimayNSLANNFF8m3ZzJwSYAaRh8xk8rbTZFjgNxAJLvFfbiRRTjTnt4GsoHS",
  "key18": "2L1efE1SYSG62d7pnJ3HBbhEYK8sShMpLm5TUg4p226nTmpJ9wcKCaGdSp4cXMHnzny3dZkiPShVxFvcAcrpyUuK",
  "key19": "5siN9AJbkdE3VS9eF6fg8NM5Qws4gUqAqpMPXHZu3qU4DjveWBxwfiTkwWmvE1B9cYLg2eDoZqhE5E4Vr7Uw8vhs",
  "key20": "5FXkp71JnAqQy6LCpG2BM4tSizgJKuYMaLNpTfAymrYUTuPbxrAjt45Tj9TqeUSq8N8xcL3mapBmr3oSyyeaGNyw",
  "key21": "49M2aY2kAQsVmrxT34HPqVLA1tHZBN8YqbCiPGAVEJGEsf6yVQgejpb6q56XSp4Fw3VdLU9D1Whkcnz9ujGcwi3t",
  "key22": "2JpGPZS5nKyobNCtYHByL5bBbRmtrd8SZzAbLjr8JrtuGm4QfGUKCVRU7bagftjUppicGFQu7ombBAA7Q7Tu8Khg",
  "key23": "4229iwcy2vVwKrTLRRT1gYMR8Kavxq7d4tstpTmCVN93UMkQzMS3QdtTtAWgNZayksSyYAXF8ZoFhqtuWJDV1TjW",
  "key24": "3ZqpdiFpnNXusSeAKsZN5kcxtqN123Ky8HzfEet6mjZYVdciRSaCWVei8kXjRKV6F25UE7xBS28EchMYhvLXEPxd",
  "key25": "3G6FexdFob64P1goGPaNAQDfJbWyJXbVQMAoeUknFoNBg56vfQvxHoCNWs5k6T2p87gj2DrosQFPWyo88sfYkqxu",
  "key26": "2xeHjq8zVpMhWWTsSxZXhBHwJgPUM99BXzhCxh7S1eSgHZ7Gj8BojBFpneFt5kGkVnanxVS6saXqj3bLup2PPi3u",
  "key27": "4Jgc1DEFZSZrBYfL7yMDnB7Nh6R2kZP1JjdxwK8sGDBV4vtQ95zMtTB2pon9bhDiu2XjfQGdLxngfxPYEfvDdZjG",
  "key28": "22BHZ6tMhGAdW5R97wJJoPAgBd3QtSVmDQZNkRmQ7mASPoHg7sRX23YHjUFL1Af2a4vb5R95Y6JstZkP8CrMYPEo",
  "key29": "4TTZdf8woFkYiy2WJfKnkAuMB93jpfz2wcYWccNAE7K3hJyKbhLTW4s6akUQwMRp5pm4HKtRksuz3wUrGKHQaZsj",
  "key30": "4qq3XhB44xFudDwjSfpv3EE82aaTNjemtuXqH35GJ2nhhCsmwawHWTBGL2d5KGNVNg46R4Bcf7EmuCTUoG8zkTGg",
  "key31": "5WFdPA6nDLQbPx8ywF4MP7ZfR8aGLKcY59CxFv2AHjnFzDH39bAhDNJe18WXfBNZ3pk3JjsEUBhsME4owFGWeHkq",
  "key32": "hGjny7T9ahigrgcw9rn9K8b6HdGL4WSqRhUZ8garADzCNvvWXg3fFtnDZbycUQehZtux1T1opzxCso25QPpXR8s",
  "key33": "3GHBAPMkMpnzfKWXYZX3kuqkU2AVNAd28SHUc3wvpSX2h81otTFBuU4c6spu7WkNqJp93FtyHYQ7AwJDod4SrEXk",
  "key34": "vB2dUVXvRv3wfP2GDiDE8PC12f27mqQ4VmgtRAcoHt76fJc98XRtWKN62EW9LCDWq1JDTb15H4dghurtxAjBvb6",
  "key35": "35pxeSaJ2om85FpUekcDh8MNysoHkrBQZDpgSNu5cJKuW6PNUz9YeDHcuVxVFwccNuDwAFxP2AxJ9vFBKPQpnPTR",
  "key36": "3LsX8M3fH3mysFHyP3dREmQT1nyGkRQ2vu4R99tFjvASWe492KrsN4fM59uyGmLDyhZhukGqJmtX8vwtJcjMohEZ",
  "key37": "2n5fRbtTtRGeCB4deq1iizyVmTq5SrpKeVirVV83GB2Z2k25eUyWfD4bnvFLJneA4c45vo5W9DAapj4WiHrKgRrK",
  "key38": "2WT9YvTy64XEWfRNoyPgq2xMeop32S5CJXmSuEg5V42Y14mJNYVZuiYe9pGcHoiaQ1axHmpQhpURFCrS6xqpKEzZ",
  "key39": "4jRSdafZJtewHjgzuqYVqffJCnCWJxKSjahrKN1CDnux7i7m13d5FausgbQtNUJbRog661DXYpDRrbM6iVzNKSp6",
  "key40": "4F9L8DjLuUvfgpxnAPenmDngojQvX3qu1yh38SU17xQB3rqE6ZWLVH9tejh8QKUCCanMQxCEwguV8FFNMT3TUTYT",
  "key41": "3ugbJ8Um3xn1SAwSB5zHJgsqQtgg8VvGDyQKZ4yLjYDGG72VsoLKVfFRiGd2vBygu3BfqSftrakkPH8ChehXZxak",
  "key42": "2fnwii3CHE4TuZJAMEmeTvxSvQB4XdpkQsSM3Dw4acYu8557vvpQKN2Js3ajQTcUrv7YVRErHboRiJaMpWZktj6V",
  "key43": "3B8kXLAnGjaq95J4xBHqpPr4PzQKvb8SWZF8jHCE6PpkhTHvbKLMNHtKfo9g89YRCR2SvNorWW8C9KpBPKeHgJpy"
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
