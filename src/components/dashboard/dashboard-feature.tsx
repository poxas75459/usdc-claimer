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
    "SnG6Xz2CqhCRzis1goPCnh3Jsi9yA5Y8oVgteehEXD3mjvjJMBiK7QmFwrSTnwroZhec8FAwqVHGGD9buQdzMnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5msdmn1YZWfWHfBM4e7gRZMKVCwyan2jyWKRaekTVhaCx5fwyPeC7FbbeEpdUdBz2FZuMdZFMGcyJDLMp3VjFd8b",
  "key1": "3mtVkgm3YpgaPGumfSehBU27Y5EWSs14kZ4i4xf9CSYHzEYwngWVg5sGsTCC9AiTivr1ajEwDGJFUyY8q8ShuoUM",
  "key2": "5bQP43NPwJaBkch9mS7jDtmsnRaC3ag9qy6n4yT2WQtst9q535KZ3QCBMeaePiqv38Zcn61kQEQjXTWZsuK3zLdQ",
  "key3": "3UfCoSbZg853pkagCd8PcLZLkoQj9NZUdd4zZC8akwRZ536RJaoPC6ATrns5V6M7Z7kTzBwkrT894yXhoVVqjKZs",
  "key4": "4uDB7QKydPTUVGaRoF9gD1sTRhmvb1b2CCF9m6SoEiyvQGPUGkyTvHU4wUaLNyrtUMT9ULgekNVysE9GC4SWYfXy",
  "key5": "5WkWNXGwDNjbfvmsxAW2fPdCdYJqSLEH72M3LL32tYfdQbY251iySu7zmuBoZyB7FJVWKZVkuEqmAXrsjYKYDyKG",
  "key6": "5VUgRFw8xzbHptKyoBm7sxPcZ4EFE3s3USkLwaN6DR4DaNgd7QVf9uJjqruTR6wNksix49SzJebvpehc1noRTVeg",
  "key7": "yk58BXd66EuLcRSDsqNTGodYsdXBjUpSrL4dvQpgNyVjiubnYrtiFmz2xJrMQJH2JUmoieEMNbaVzq9JL1fPq4F",
  "key8": "213oiAJ2dor5Mn8f2or88qvHzk7F22oadwiL4HtY2sXZrr73Dj1SU2GuTRKM9nUF8vGEMFihKG21R7P4pveSsAhi",
  "key9": "4P1sZKXxy3RCPi9PnQBtUgb62yMcFvmvar5XfKB92ayJzvNPewmZWedY5g6WF62uREyde9mLN2hcsXx2a8fz9jWH",
  "key10": "3z65JxP6p2cA5HCARDE6z5RVwdJK54RpwEZz9QnK8D95kynRHAfQnq3dZyivnzNbRKw1zFpNkkk1d4w8ezYHzMkv",
  "key11": "4JdLBFa6yLtUZaeNVhRxtywP2bkZw94yTRa9VKa4KM49Sfr9MaSzBCCKoRn2GFHUdUBwiVR2wnogy591RbXsZbvk",
  "key12": "5SnFZhwDXu1wCb4ZekjPHs4cyBhETGLXbo6iSysNEoGMHVuJpGXkEe8qDkYUAX8um1RUgJBiSRpdrHpKrD7gxqgp",
  "key13": "2d67vn7t4ySDka9a8EZ8j6qNogaDHoZ25mVMdZhWkqTY4AJk68624qty6sj4JcTwDyusAdPaS6dowDEw4xX64kJw",
  "key14": "2FsWAiXgnraa9wVgFkGoVVfrqwasBdhtGrWXAs2hToEfWDSureim71K2gypi5qkRrbzH6LHmoetBZtrQzDnUFGVF",
  "key15": "2PdNkULhacTVcqCex2vpojRX5f1VbiPZXGQexRA1kN1NnTPfdBMUQa5qeizkejEZEhQ5Gn9vcLTM5EGHKf5ZHty",
  "key16": "5E3AquKbHE3KEKBTPSdgsi9Q1XqUMY6HU3NLXrxLxGMgtrUQ3DLMVSHBfG7nWKCmUUDybPdEYTLcnyGZo7CsSpSY",
  "key17": "3TiGUHgy2p3CmeVpADBJ45N5kUuRnvbN7cAz6EFhiT3C3q7WX7gno7j7dgNYMCxTFsjcNVES2N1qbKrEWuqdXZ2Z",
  "key18": "5PUBZH4Qs82KQszRk3ciiJxpAk1Gmo12aGqHNS9inLX7XTWKNXqFxkq5CbPoExdNiRKYib8XJpy54w7Nk9G4v9sT",
  "key19": "4xd6ESpFnfpGP6WfUw25MWHaBjeaGpY7u1pL16kTeJSqXRQhCsyMDXhHERpUuS3vSQywDwooMzxctjSV1ptcyNxM",
  "key20": "3MjMnYLBa798WBSQumEY5LpG4GYWK4RV4J2S68rfrPyVZ11WSUmF8jp7NU52LEmiwyGmdPngtTtR1Uf8Vi5uy5rQ",
  "key21": "fnXrxvdkGSpfx6h2xA2rN6dJ2R4JP6rFhfTpfHKVPyEKW2FirbnYT8zMajgKyA6L8gzAeGJGLz275C1SMLBpJbp",
  "key22": "3PAULpnjaTh1Bg4WVES9WWrhtaTGp6QmViBun75JmbDbV3oTbv3mGpncW7tQCUjyZ5aANjdC2KPE3o9aqLH7dpwx",
  "key23": "3tyoekW4CnTrLA4RFjNtgrAKC2Nze9rr2XCWxGsjA8Y8deyMirYkyqW5ciGtXYo9gMS8vtTN69UjjaLADpJM9QN2",
  "key24": "49WJbtpgYSNQFUqQR3o6GQnmtAUsaFXqs6mkV5tPnntoN27bdEEgQtBXmoNKFgmGiUfhhLcQNzFQjxNgk4rCJ4zu",
  "key25": "58QQgUh1MhPEHH6z4RWZPmpsWUxDKjymAnL8qsXU1P3aE7No8b4cXk3mJBqDB1pNhHwESVtSTwPQtSsH8wzhBwc",
  "key26": "3sYN8kbZ8AzaqhYn1kNfJYbd34AhHMTbzVdymHXgFysUR2H41BW2X7tAYkjEMpLKqmJg4YJsRWWWCSKkEBeWcu2m",
  "key27": "3Ahed1u8yiAgdGMriznoTFnBGsfpsr6ymETFHP2T9hd3ZSMKWf9UHdLn7c9owi3fKvYQWUDa7sN25suXUodH8QA",
  "key28": "2NFw4AxZUS9tAErkRg7KAQ1zc5HBLwEBN2yqWwrehwJPY7WkqgLzfWurg79MyZ4PhdACiZTb5bL2aKxmAxksnJRY",
  "key29": "gttir3mHkUk7Lv3PhJpiw6WSzC4tw6qE2Z1JgzHYsxN2qgHdSRHsVweUFecCX71FehHACYP4kLiegmGjG43uEJ4",
  "key30": "5nVvfBDZFer1WZYmbu44JraidEqw2nSVzo938oT9aR8KHJkh6o59rKNNKf7XEggWvBTA9Yoy5Jm4NHgDaamLfMGV",
  "key31": "3r7VPct2zsQA5ANrczkx99eQAeWqcmNcam7HytkDDkE9UxEMAfETeAVNiVTJJa4DU8DxqB41d4MZzF5ap1jwnsZ8",
  "key32": "37ekKUsmLA9Zgpou3x784hyM9bTr8SBR853W6RDsZaWCcQzaF6RYMHtfExmyxxxSFTTniiw2j534TnAxXv2ZhjX4",
  "key33": "ha4Sh1ZHpFH4Kc1MEdWNos9Tc5iUqRhjB8x6K9m1Y2jEBkFBrdmeA1J6pwmgoSe7Uk9F53dkNxwWzmnVWSN8kUk",
  "key34": "3eRwjF9ZWBsz3WEqV3WteTUtMJNfkDr1XR9YbxRA1uokZcBEqoiu5gLaS1HRGQnrfWPDNJde7FXdD7JvvoSGb2Bg",
  "key35": "F3YgLGEKrWxxFZjionPqsvEmkfYcwUZaJwxSXC84hpsz2GPS7qi61WGRjWLGb8bQU6HDFytK5DUnoNwZETpoaot",
  "key36": "p4dSDBY51VDuErMbaaBww6hXsutnzBfM2z4VrgWmCk1p3quNZvXS794837L5zTAvoctritELZmRTqPi2bR73hUD",
  "key37": "3uyLiwhnhk285GRJ2dhsSECqsPZMKAjKMksCXmqDusFAWMx4XB7VCt9nx8WfCwWYPjtEuXcHfwnSHYd2hsGFxUpi",
  "key38": "NdkcMG44d4ggA8d9vcqqwn7ispn4dD3aGfBcARRmdxLnq7K4Rdm9abipJLqqjR3c54e3J8Ux2k5JUc3S8459H4b",
  "key39": "5cUDq7cEHafWZ6fuy6xFG8cnJr8xsgEr3HvHxgm1FcdfVfniuQTJqWe7eWGLMh99RYSNCcNLXuK14cpC2hnLfDrZ",
  "key40": "3CipKiMUsuNHo2nMWfrcWTP9CRELK1irD3vpMJjiF2rAxpDSauQiSX9rj18woKM2Gyidik7XsPbaNMZpwEPbq8vk",
  "key41": "LSVRrywFAPiBoMBrzArz8fH99qXVGiQRgnMSBVngyGbzEZFAvjq45d4gmxRznPF5nciUzVP7ecTnLiBEv3GTxgu",
  "key42": "5YyrLJ1mpCcmT1KiKyM6RfGdedoxb1cSXa8Jz1xmpLk6qqYURGmRVMpyR3v9KdVrJi36K3ZoAVtdXLyWs2uZCmz6",
  "key43": "5eqxwqMrrFvHbFj48jtCeGi1RPFVoYFKvHT7JuTbt7i4enyj76HWzgEQ84e4H4DusRHrLtf8CDRm87NM3ZnfLFqr"
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
