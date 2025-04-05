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
    "5xfdJMJjQAYhz5Au53bvVujM2Wa3AM3Y4Vg7faxHd31XQb1omuNUxPY67dXrCNwoPHVzrWQN3KRF3r6HbnNZGFwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C1xycpiYEa4FMM1xejszuZxFcUhzV1MqM5PVi82eVDQD4jd8JGQFx9zXBfoCj6GQc8ug62ngL4epnt8y2j2pmW2",
  "key1": "4BEymHUp6e5ft85hjoteYouhtvQ3KTdL3uL2Pr2SXggGjfyYVaXBTuwTWJvk9pvqBBxuyWNAsqm8ieRUov9bbfmk",
  "key2": "4H8vTPFcvoczHwhRTR7v5WG3pyjGCTwQd4vZJDUFmxKnrQ4PFYXZHx49p83X4RY2oJ64e5mGxfyGD3befi5DCbVv",
  "key3": "3AgrboHKayAWgrZJDp4spBqvSU8aWsHiaEYFdrDXqiWiKhbMUQg5dFG4iXTdzCuE4dmQX1C3asXbccihK7ShF5za",
  "key4": "77M3Qg27URd6iELq8MYKSoisYaZGKvFRaz3hyUVESBC5LzmPW2dVv68yFcPVPVS8aHe7YgAZv9N8iM4p85c18Zu",
  "key5": "UsYVrBERDVTRBsAa8m6ZVBr28aHjxxyGQX8AjxXLgkLf3i3eYYxLBZ7ztVjWDFRiN7dDe1VkruXPh6aH5kDkzgq",
  "key6": "23WVg6YMELfP5w79EvQMrGxNKMVAqn29JdqjjncK6CmvzSLpErMgimfbkmyRpLWrgwYn9KLUS2DZcyVE93RsJwQX",
  "key7": "65VCdpuMCSoSPNbv6C1ST3JDkLvnLHELjjcYmwdjYuw82ejhjTttrStGBMG5ZUnGhg2BFspm2GCPw9TBaP5GX4uJ",
  "key8": "kgoWaxrX6xZ6RKvwE8hBSeskeUudfNDzXYeViypXLdZrdPxq4S4sM7C87CZYEcGDn7jzut5LG7tXNm3wCQQTLjS",
  "key9": "3MikA6XjDS8J6zr3BdiT1EsuvKrkBEnpYdjgq49ZYVL4KbeDPS9EQ4LFMxZKzLzkvYERXKCp2rxuTP3gjxnfDKGL",
  "key10": "2F8SzmFaPeiaZ7S1H8uYJJzHHTzMpibvDdwo9PCvXShdkL9pacpmE7cA75Y61JMENNqkYPv6iCdVs6b4uAGL5mGE",
  "key11": "3L9TiwCy9H9VdqvCDfqBRPHfrFXeWqqqE5xLG2nM9eQqV1iBhzchPU67cLSSNHZsTDLr2cq7U65MJy9T2LQiDY8V",
  "key12": "9ibGGArAw3ozHqgAj9oYZcZr2wGEZWuYsgqMZmTqXKc2geeXmV4Dt7LS36YbySxpQBMNL7rV9qMHoFDWCs5GK21",
  "key13": "35CmB1VvwomEMXCXUQfhiVhrWfNSoLRcv2oH7n3UDzceJPjpgjsEU1xkRPMAaPPqJn97aNr3bGdiA3Zq1zoWb78S",
  "key14": "4wYU3EEpskacRyVtvZg1kjbVYvam218FWABB2XGqkZtGMRzGsoVgBEQjMU6aRV4bF6ARt1xSiTuoRAUQxZ3q7E9M",
  "key15": "121R3A7WM17FFa9WTGddJNagSX8pcBGLACYhFpi16nyNxU6wiNUd8sUCGnAkpqna7UFjEjPLRG2ZhHvASLV2fFvL",
  "key16": "5FGdGyfJnCkHT7Z4Y6ypXh27NvKhifa3kBzScK4pxQ7uzd2c7wnK5Szcri6uZ2FvAUTFHNqYqV44uZCngazVuWiG",
  "key17": "3CJtae6rU6KgBSxxj9jBZU8gwkJBTFh6DZK82jPUxhhoaNyN62beNHKd9XLeAFf8noS1j8QCkEJT4nLYPb8ZhFLE",
  "key18": "5BrrBBeN7TivP4XfqGL6UnmkZbsVEo4th3b86M4M2W4ypcjRj9FWbuww8GkuFJCvXpVhVV2zanV3FDVjLq8MVJUQ",
  "key19": "5rycgBWwPBYSLekurMFULhnzNibycY8Ba7hGzJyyK71DNnd3Xz3XjXdiwZEFdTdDGb6ydH23pP4zH8AmAatxziyR",
  "key20": "Tn3vjkeFBjvYM1HZB4njbYHquN3GGobyaNhT9vVrtqfMMkT5CcVVBJPHE19zGmp7Agi8WhHXP1BnrxLneRz4MSD",
  "key21": "4JkJeZHXTeADE3zSSuerHbrgRuLdaXRhAbvpdQdS87bMKyEQYg6RZuHQBTsknxrngTeDRPakH9niLp5gpCSEEovN",
  "key22": "28S9PBrMdtG1WVwdvZVYEPfvYdbZZ3aFYLCMGfQbSB9RHsnNbvtBRrTL6CqiRQsVEhUqoX3EyDJqqHhne4VR1v9U",
  "key23": "3mZUqpHAvjCq61H4xkDUB6QNXoHqJyHSowYBrAiZaLcnrHT6uZesLKZc6SfLd57F1JRLoHXb3bwWdquF7csYjnuA",
  "key24": "47ceagcAavsWWHWfgW8t87kFH8BmrELQchxKdqAj7wxZenYsGkHknkyBzsto2Sokq1xWs57dXvpghmdCaqYNJR8K",
  "key25": "2JT3Kyy7mfyAauMQWn6G7N6DE4vwxuQFSAj4ACdxXv78QiMYt3tFcFfPtiLLLEW4iqagLHF7eMHA4PEQFwv9c9p2",
  "key26": "4CFPkLgSwT2uV9MzFmX8dtgrykLoVmwHz1yVtponv7eLzBLwFgJSJyguJFgP2VSx7vdwb5HdN4nHmUxLdi4BNSSf",
  "key27": "35mQE7zTdHLxeyGPFwfmxv6RY8Du6BbcFvRmHDgQJ6tSNt73kbs8Rrz9YijX4eTFvdRYqs92kfE3TaqhNbtpjvc",
  "key28": "2nTETLwgXTujtHo2KzLgKdVbN5Euysdngxzw9NVzcmVeL7TyADG7Ukb3U6Wkq4vEzvnbLpChgKhtyDEdAygnv19A",
  "key29": "Adug78o7HcwaKFc4XqKu318jjUV1zq4Ubh4wna85JC2BhH9rKiXJvuaFELyhbRwnkCrrgJPs2YUHirxegC2p19k",
  "key30": "3wtrP8Rp9EfGzBh9VszHymxDN8dhAtkm8VhraX3fp8bM2m5WZE9zLwyRtH7tZ3hEc941GN53PLJjPn11hCnJWWb2",
  "key31": "3Hj7ahsv7b4LmcDNUAPdozVXmmfKuxm2mUFVX4TVhMJ1NDEp8aCaxab7Wku3RtitmEZhnKervg4VFYrqBdtNGMCv",
  "key32": "3W4Fhpfxrt1GUCUszujbJwUQ4r1K2h1626HcERzSCRB6rTNKwTArUmDca8Ca1ubDMrR34PHyRPtiuEcBbQEaBV9x",
  "key33": "64GabnUgx8bhbszcBZhP8JsGtBeCiP4E4T8kzrxfRaQvXrbQWS5VoAFGuJD69KNy9U1u94CrstgCGGoRHjyXxvg",
  "key34": "2kCqxvh9nap8K83dagG1nuM4xFa1cwfgzEPqszW5mjeUa4NRgBhvcEisWNcf9quCsreGKN1qH9MTPdRBa674QESV",
  "key35": "48JEP68SfFgQ8rgbzutBeQrxYCWqbfTWWTzwjbfwb4fNjSeDpopC4LLKcCjnbotsXb3w4M75NUzrDKXJnQ64jvM2",
  "key36": "5EKdpVcinUhheFNbgASzPSfLnzAU7yN6ee8rnZznpMwKPEJEdZYP4zSZqJmhFpR6tA1uPLAXDRJCHAKfADywtgqP",
  "key37": "3DX3NDUja7Vd9ny6Bj3x2WaneRU94fN8LK2sDNAX7cYJAE2DKWyDH3xm5YravMNbSnwpbaoV9kiHFNrP977ufDWi",
  "key38": "AzVr2KoUgxmvkQ7bJeR6KKs9kn2pxGp94GjeptF3W5eSchjWgxK2gXXBfnCLxS37g8wVAM9Y1M4Kui8bk1bgvha",
  "key39": "65DoTzfxKNjuxVYFkpPWMYG2oPMCfqpWn7tLWKef1y9tTQBxHnDLLwLUcv3dou8hPkR512DzFkC5qFHuWh1qY9rE",
  "key40": "2LxMU92AnL99mf86CYDmHoY36d26jCPAa5ALCvu7mwfwaFJHzPtXvekU2Sbm5avPcE7M4wjmDbA8xcrpKYNCvJoZ",
  "key41": "3cj5v6JWZtBQy4DRKHyfrJSdCJo5NU5TsDsc97QcbkvVJwsE7BHnkqwxBJTbKKEP4ZXyFQutfYdatyUWyACWxcB9",
  "key42": "LvtLVJa68WUtwmXRUCXsxwi1SccLUxNvnd6BCANeeNJXxyQHg2Md8ecQK78X9GfK2RgJRniwFTv4xrrjQ4k5jsD",
  "key43": "41Mx3P9jT3AiYxddonj5F3Pyf3xAGnNcS9cmszrQmKtd1AWmF1EzaZ3VjXtMLx41nKSnKYzHf14eapxqVQBPQQwn",
  "key44": "3BRdwuR88c1AWZC2b4DNsJhkQRq7Hv97tX2A7n1dLdAtbMezxMLyThiQVeVUhge3T7SRSuemtxynsv7epuHGQL7d",
  "key45": "2Pdr8hhcC84V359SbwRdLsnu2ovkoPqWepkV45fpezFWmdnEEJqoGqdd8iCPxSDHrdE2mhmd5YkWFyv1xWah6SNy",
  "key46": "cpy3MFkx5h5j4BXVjJYZPBCZjHmo5cfinmtmbCZbiE6F44hBPcAAVozfw8btxHARoe2SnDtfQ6Pepxse9wyQktX"
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
