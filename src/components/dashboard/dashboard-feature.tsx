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
    "5ZA3EFBTcGUWkto6suXSHMvAactD1N86xrRY8GCnB68mc9JeBr4hWzFFJc6gBjd68fMgbC8CvS4hp4bMsMVXViqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KUvGrpSUuC6ark6Bfdn83pPps9N3xp1fAU9a3r7LcptMsgYewQBwqyhAcEc4CaEkQS6U88iCYn1GtAGvAf9soey",
  "key1": "2ZgAjiUfhatuJfnZaPkhkQjeVcncMVSwanwQQSceYgi8unF53fz9D8Ebf7xBBhezusd3dgry9JskyosdRD7krbgY",
  "key2": "61iHeJV5xqEUDNkFDbV7qKJkWJHVS9qngZ8jAGLt29YMQZv4jJ6pwj8EQmkYu3AEReHJV3wPA6JhUzMa4aSAFBds",
  "key3": "39ZwLYUHnLpmPuaggGpXdhUuQHmFmJACnej23CWmjjxLQ6c2ZQm6oBqHy7rSgXkwzpifVUzZggmrwmvdqpmpQHtE",
  "key4": "3cmKiaUiJV7cytAr69swhadiAbNeKbzWzSMJ256Nv8jukbB9WqjEAHTwx8hjgY229y5vMzBn6VuRMQLHhH2jr1KA",
  "key5": "4BF4FrhpeGe1Gv5WhpnLuJhpXVg4RQttJVxTyXobgw671rHubVr8wE3gquJBiMKqFYMPa87S9htvih2R3Q5NXYZJ",
  "key6": "3qqHtCWD1Qgq8xFDe3QXfpeAZU2xEe7BzETMjgqwpafePJgGffGW74mYNhHFwXUdmQ7PfPe1ouaNh7EZpYn9yfhm",
  "key7": "ykgEEMj7seWhKYFeJhr5G25uG1CyeMBFYDfvjtxnoz7gXFVvXTV9Yi7GqEDFh8kMBD5hszkMhstCPRkp61eJ53x",
  "key8": "4qH1zJagHNkQUZwE1rn2Cy9xHjmYDibLbzboc9f9XphHjcyJRLhsHm7vjUQZcXQraNoi8o1YuH1HEcBEmEHHP6uk",
  "key9": "2BcCzSPfdV1YJqGwMRe9azyqdEfSuo341uwA4AqUEniDLQmHELyH2fmiUT4NQ5S2mTNFKhYTbFuSWkA6LYdY3XGc",
  "key10": "2TCi4N5K3fHSdA2HV4TwLmzyZ7tU1H1r8ut7xUdpmuZrPEAYzEdwN79LbyLsiCjvnesNyYMumbEKhqRWhfmgHRrE",
  "key11": "61vzZnN6e2WtxxtESHAtjzRcxxcZFYJHLVPFfXwZJcDDwdaZ2fd7JN8GoWbwSxzxDXdHy2RvhyHuHfsg8iDDD1H7",
  "key12": "5kG6pw3DkxyBu14EXzq7uk1grU5rmput3Ar1tzZdDZToRdRvW7edpVpocjDt9dQGU9qvEvYSVmuaVSnszBTmTEVm",
  "key13": "5ecYS5oGYfZuqXvXhiNQWARzXaebqCWyvz5J6f81DUUM8puno5uxz8xc4D32m8JK3KXgZ9JszGog6AGYmjPfTaqa",
  "key14": "4sPzWhA9NeStxnEBDK8Jiur2Hssp6NVSs8rPMzrMfReoShZ2EdnTPYxGkZcXiyAGrokZqJDZCD8ZQCNA4oZtJbcP",
  "key15": "5PqatsqbnoGyQpm24eaxQYiF6yXehYR46EPjv3YRnf7126DEeYch8EDSLASnbyzK6hkhmXdT8ur7GtCSBFkVK38m",
  "key16": "5Dibed4FW9eeoMCCZpmjuXGBXiLe5RC9wyvJwGNxsxEoktLJoCwNkLBQLmj9xxRLrQtnBPAnmQpuRNTi9TtF2XKK",
  "key17": "n2bg5KiHwH26PWfeaNRNyimL7bDeEbcgo6EAQtgGCwGakwMdL5eD4swNpZ7BKb4YQRLD6jxkWLQeMLRCftcgLsN",
  "key18": "4BHma6hq8ZXFkG3NX9xsTPVD2vV6fvzojeWmYkth324qjChHEBuUFgM13oMuiWgQRNM7xWkjb5ey4FFCSg6qn4DK",
  "key19": "4GLddHKDRzyQvJm5bwJnnMAaWyGx7W4Ts4CG7crvazGXjQ7E5ANG3ms2kPXNy2sX9dnukB3jdxjNEbzna6AV4tH4",
  "key20": "3aB5Y4hP61srNwSpjpHHa2FgFhEzopvZXtUspaNUiDRqkgiCCKeKhiPaYQaZWNPukEj9cjiWB3N41hUUYK3QaxUc",
  "key21": "4sYFtbyxKBguEkU5iYuXTUKNutv1q7EPkv8XQUphpexAtffqZHNirN1itUs62VwMa8GEyujqLpN3MnPV53G1ssbS",
  "key22": "2zBYr9H1ahpZiEbbymYKQV3C3ZSpSYzwEuS359DHsYAVaNMe6MMrrjA1TE5V2EdrkWLw1KgsJ5Nn7qqkAe6zm9FS",
  "key23": "3SG9jwTzcJNp4SyxjCUL9XApQEgwziNAgKtvg489n9b5KC8WFJCaFVa9dXFYmxx7iPL9hacLQksDY3DSKKr1ocws",
  "key24": "BzQ1tfac1KmWUEGSACi8wHkay2KJpc6BG3X7xyUohFueXY2mDPy8dW2CHyGiasSQQJAcbvtYJHHb7tjwbNXZQcr",
  "key25": "CaLGjNqgjg5L6vd8fNcQctGpmBVUrhukTsyV3nvge5usyZvMXr9dH2LftEAMY81TzRBqPjBYVDw3dqf8SjDesuc",
  "key26": "3HoKW45YgWbQiWiUPBQq85D9joru5RgCxYVppz9v5X7UdtXukuD3WRsLRFMLAajuVMYeUyXyHDt6qsXnNVpDxoRj",
  "key27": "2h92kJX8bcDGWTgKrenhC4zTQEwHMcf3f4fNRBXuiVg5rdUJzSwPwPRSgLPyUmByz5PL32zfdNbBjtST4XXdmFjD",
  "key28": "65Yvmma2AL8SfS9n59KbmuD3TV527vvwLJqRpih3VxJrdBnhTr4M54BvAxXnBLydyhFjRswQUSDW26aJS5EkdX34",
  "key29": "3S5XGWn7yvitEAsXGJcwHpu4uEVLM9w2jkHJA8LcGT7Qu2wx9N5WaeWKAPFzewaLCBTi6XMLM4nucxZXYeqWCYjL",
  "key30": "2PdBsr5yyxbxAscEmj194YF1hSiPM23792U1cQ15y3KFWeE1cX1wLnQjkGVD4uoVsnnb7YAbscyZnAE9MYQvuxv2",
  "key31": "37WM5qux3dP7VKPzfQ1x45MUj6nyB5zqtK9X1m7rkA6LL42bZ2TnmscoCZJXNjgL5KPRx3WVp4zpzK3oHrZV7JC1",
  "key32": "33GpVRXfzU8yC488R5RGaU1wJSDWRprjeeCaqQoiFi7oDvsdGN2ywQx6WwAByvMfRqYF8QSgAayh8uWLf8CPuvYg",
  "key33": "35Kpj6X5bj8c5buEFMZJQEALx8zehZ4LJRLv2MpSYh2SH5hTaQ9JnvkwBRnrG8CjNZuNHjCwdakzsSuAt7tFnV4p",
  "key34": "3Hvr9hGg8FsSxKhpz5vWYCDyRikp7bEikQ9fjdBF5jPnzE3tN7fp7p6gFCz4kdZaHE2AeLkPEkbThMj6m9iduZe",
  "key35": "3ZCaxMg9pMUdfRcnh8v62nKtqquuK6pwx8CYPcfrv5kdZcHxEye3M5L8ZezkJtgVdYaQvLJxuHV4SKiN4XyvkcKB",
  "key36": "GunwfvdzkjFWSDcX8hihFP8u2BxbAgi9nchRntnXRZWY5E8fcpBr212TPVsXRED1A6i7SDGTvkenfoyBJuLDMdS",
  "key37": "ZadRGjtspGTAfVqgT8XL7zQj27Tixx76drz8MqQtftkWbTXvcCHPTLLMG2MJqcHZmeYKAsax7D2JTcjit9Dk9BC",
  "key38": "5NPPLGfVcMuqqzZoFedWLopzq7s94i6d9h98Ec9Df1QB8aVkSQKv2ruvvwN9VDZqqrj7oagiN9mKTBK98qwbbUqf",
  "key39": "X1GhrJ8Kfq8zPAvcUNvQfpS8H1Nop3Z1NeWVgrqgt9MkNbMwruQwt3p8hGA94P6kj4zMKyJMH8R3DDaAP8K8CW4",
  "key40": "jExqZjs1kkqv4Y4gkchzdm1WZQksYaw8RPKZdZ1TW81gsHyLE6YFegJidB93gSuh7UfQWR443WRtvPRrX8ufXmd",
  "key41": "4uKhAypS2iHkJ6MtNGR3vKAgbRAzgweFNsN5DCPDoAw7DWr3NPTbc8MF7YitbykN4Y7xktuRyNtM7RwCfKzttVZV",
  "key42": "2JeKpwUdstjQQmgrxCN75EDF68hNwY8wTVS2J6otFg7C3SpkQdgtRDrdv5TeZGou1HWQeMFvYbiM6dQiFMovPvZV",
  "key43": "f7dhBbNwhwMd6EWEEpjBpwWaGFB39iR2w4jHtFTmgRYb7fAvrmBYbCA9R8apiQyBMbdAGN3TLpyd4xoyYvbfzqu",
  "key44": "5kxeCGwysSBuRsQFwT8JWbSzjZVESNcnDY4G9aYKhEztgnRhmxgoLgB9X8BzENuaYgf3L6a3p1CtbLbjttURx7t7",
  "key45": "5Xukna1baZQpDJZedSvfzokMPdDijqUV97oQnoytqF2AK88xqGwg6D1VgSsrxLLJTGaxmQX5VBbdjyKD5qFH23tJ",
  "key46": "41BAjmHarrkscrsU7vVMXquo5ZEUc9uevVQFjqra9McAmNrf7qYmQpmtgiYPvfm7jPRyuWbEa3DheYzuAZpE5QuM",
  "key47": "3YU9PuYeneG7YcjZYiRoppUnwyNkJYnVZmpihoD5L9WtbsM2XMSHCm2KVbggBZ5ScXgex41dw1ZhPLFbLqHtvRcC"
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
