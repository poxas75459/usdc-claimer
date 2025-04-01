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
    "4HrdQ7n76asTSaZQTEQG7oKDHesjrdbuJnxpDB23sK6ptvBhRh6YgbNZSGBZnZQ86WuyHARxxxyPnSsySex2LN6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ysK1VpJVYipz37PqJiNSeVmn9DRvee2bRzNbvFMTvXaiegREsBmKkQA3tVRDm7SNaE6c22joHvqnG58zrYe2Xr",
  "key1": "2tkzf2eMZVLVAGWPfCV7CuYHmmP5fNbgHpvSSUA3L6F3bRXA24LNhKsxwzrGLuX4mSrezaD5u3GLebXZMJLigeyA",
  "key2": "3hbwgH1qfG8ZnSxvbydiowFcZ5G8LnMZ4RoYYK8xF8NM6WKi2zD11W7MoNYoywAdzvQr8wtJESRYpdcUekeRazQ",
  "key3": "3p8iHrJHiCmXurVwFvuVTiqUjP6pV3NnXNusQ3uCcqBQytNKpAqD8aroKLyZreNhpYJW9JCyVaZcNzokkA7wmvxc",
  "key4": "41o25ctag9wZh3nFwHErXHDeRniohufKUkRUCGaqHD1PepLhAeinNdabXu3rH49Dx7wjsHAB9YC6doADhkeWKKG4",
  "key5": "2ahJD6vuLFD4Ru78oSWCn9FA1Zi34uwBWottpMxW5guxrxL2CU1UQjV7tNpqZ2ywL5ATQur1z44u9fWpjswEjzNh",
  "key6": "39xHes6RK3uaGqmTZTNrGEmek7DrwznEJYgQcF3ZJrL9PKo5pVEwNVdq89A1oyR3QBdVPqToi1uGCjx7jzUUZmgP",
  "key7": "2UZUotoQgs1vqhymmh1be3DyR7gV8HxSQtEeGKU4LBce8FC1UNpsbEkTeox8Dda9DiqJQWCj6TVhxozpPCQL6rFg",
  "key8": "21xztZ75ehZRw49SQrC2qV7VQh7TMemW3K6MJTsArpGo7F2futauSe3raAdykBm65F971o9v4G8GCzMLdd9jtGG7",
  "key9": "5jo2S9m7PKXYx1PZ1QizW2g514XrfPV2dqd6WigEAnWLHAN2b5MwGJpUXHHMHUdN91cs93g7CiRVz4dRkHEqJUtz",
  "key10": "2A6PhaJhFKByvHDFjVSFSAnDczJ7eQJbd653RmVmmuckWv9xpFr2XuWXdHxZz1eYMfppar73fDzZF2BeJhK9UsoA",
  "key11": "kiemrLeY6wgHz867Y3RLpAHAx73kFjUEEnWXJzf9Neev5FYz13fTQeasTgDAKtPWBaV1izDfmz4BMti9RNYfz7H",
  "key12": "4bpVHD5E64kKsdKhhShMRQa5UyU2rE14v8hJLq4EyBnkGVKjCeQu13iK3BTSMFe6Q3nsSfeCyVzE5ZZtbv4tmbGH",
  "key13": "3HtsBcLwGg7kBRfNTJHj1pqkqZpVMP2ZcfUvdyfpn92fzKT7KFMFUVdUixADEgURNeWbp5Tjvzko5FiVQaemZWFb",
  "key14": "3V59dpZBJXzUnZoYW8wuuphub7kQTsL6V3cMer7YmbFgR5whkdBYQJo8ehDG92LuYXdMFPjJ6jUUoZeVCtk6De4d",
  "key15": "5CurAGzTT893KbN6fQRJz76taSdpKBiVbDrH4svwgFEX5notCGFyTYWYBeSmbYoMUhM4fpP5RMtMhSTBAUTttnXC",
  "key16": "Dnbb9Es9Gd4L7b39iKvMswQsz6SoR2sfvQRtG8fhYfKPueAnPzFxVhyFXtfyTqhbqEb6QRDhmnEtVCvESBn7zNu",
  "key17": "t6yDZ68JV3Lz4CuSkNmtEY3b943rasUJqDtCeFGLWy7UwezeykFLHWyRgjHVmfTazTnZy5mZ2W99igUhH69XKkB",
  "key18": "4S7xgjgSQpp7UgyeNEuK2AQynjksyp9wzd6xqBEsJTXxrWZ8HRbYbb84Y84EQ7mxaQyfxFC6wmX4EiCyqboXKsFP",
  "key19": "5FYYwxN5RUPzTphc8vqezKNKJ6amMHSFUo4wB9r2ktUvR6VFWEQiAC5bvdjV7vMGjpB5ntsuFzzxqCukSC1s2Nga",
  "key20": "SzNRunhEjJUUUcepKvcKFougjYKwy33o3ESGkC9bJv2i5AKLvM7jBB6whixsGCSrdj4D1JY4hqppUCy6iyKY3AK",
  "key21": "EUxBVkFmZMMu8fwPhgqChtvrWeYnxrehhJdDpffHdKn16dVT2Fu25VVULYHZFT43LhdmtewQGCSsMJR9kqy4qwq",
  "key22": "5WANX9JNFnezxmjy1g7A4GGGdB6cnboSJwssdHX5FthkfffnRELR1eSM7pXuHDRgrkTE5ej9x9KQNyiT6K2C3sh4",
  "key23": "4nPPvgNBo1dkKZrXBTqCo4MGrPHtAzPKxzvEPLBxwyrCChyyB7eDLcyYNWkqyRGdY69PtxXeGDpmjGC4AE5pE12A",
  "key24": "5HgqMSmnZ9J67Yk7JMttv8eM1uad4THYjvZHwyQMtE6juXFYvCAetGsCDXBRKyV5dsRPZ9zT1V4KVkL4srYhaHdR",
  "key25": "28PdbkdfrRBdZX6rxy2ED87oHjbVXRuFdYk4eSPx13XAGwdFiwDMLHi12BSwFRe8zmA5UFg7HZFbNKUQSKuSeSBx",
  "key26": "3doagAFvFFg8WreZXNdiqD6Xy27wSsHJK8yxAdu1KAt4YFtUtyiCkpXn5ijtHcgziSsPM5wknicRSB9CYAtzqGXV",
  "key27": "5i3yNRXPX11mMQxQaPcxqkxLGhwwyqxbaiQ63GQuJxaGRwSXDavJBqqrB2stHrR8URPnJc3vaKtBWZ819aw8ke9h",
  "key28": "45G4B1JcuJbRMbmA2hz771vX8Ht4oW3MtpcRgTF2PCe8CXbKu31KAZ398S59dmgzvt8Ap1in73vrY5QWyZUFZBqU",
  "key29": "5b54rJYtX28cX42R9mBKESGqYBMQreL5featpTve4FxUDsD9GrPeJJUSnZ1W34GUzGFmgvVqSm1kp8X45MvDh7ob",
  "key30": "3Jopw4gGTdN9F46QR62cECfhFkJTjTSCTiaFHBPLGh4xDr7vqEpCmsqCCcLw7uCScPn4AbqCQqeuwRNk1VNoASMU",
  "key31": "3j8hs1PuSzHxd1GCPWUYfS2hB6CM29aGkoSQkQpYhfHWCyhUgJhQ1XCvdeqWwPBAJ4NbJBswfgyJa9mkae4SUgEP",
  "key32": "43ESwbh5WjVUm9ciVYGygkUjzDNn1Vkpqvb1DZjj3gpKENpRNY268s6fq93TSg88FxMd8JWDEUc5PxU4cEMRLozW",
  "key33": "5n5xd41hoeyaoyXQd9Yg9WAdbVRRFhiQ5WDCiPnkEiE12FCbpfDVbfjKLnWAYwgoESMbgtdpmj2qCkVbdreHFkSH",
  "key34": "2cToTUaTC5idQ3owPCyWyCNynqYJqqLbd4PTuxhTDvNZ9rMqNCixR98AoA8yDAZhuC5JbgS19Fk7yhcKQ6gyLqr9",
  "key35": "4DoGBjrW29HTwgLotoY9icvLAKG8eBkYk2M7ofwVo85qyTUCLjoPR95CRdwM4P9GnGYje7AP2oVzPQNgjAZcmu2i",
  "key36": "K1LgSaTryi3nau5xUY3vHBK4HaPLrWgQLPfL4wYJ7haWH4mYW5e3UERPhu2PhprtarF1wtB9hNpr6JKCTh8TRS7",
  "key37": "2BgBDaaU2StsDVayPXpvqvkoSFQBwWd6kN2VAH2MARVzh1ZEt6NmgFWPsAeHjsPd7sTHcXcu9Ye4msSm7QNucKj5",
  "key38": "4aNBEHBtL4zSLYA7fimeHXxxFWnZtqBH4ey7W68LjungJBL8o9kuiePyaC5Ze23LtdohFsZyrCWjSgDNABe23UVu",
  "key39": "4N6r7cKoMShB9ZEMuu1v9ge23CnrkWtZS7NqiwikKXf8x8y9vyNVBJR1Ue8LytA8zYRcE86M1ddMuG8Go5XzKHHE",
  "key40": "5yDzPRgLdQn3ZpekvjjEEoKBiyRLmhUHkeoAvY4uBeZi1YWFM99iFNgdXazNUVru7Xz7agBXWd7YuDDhWPTtJhK1",
  "key41": "5VYJtnRS6buQvm1dZahruw5RtYtu3MJsoDChXzZcpHkVkzYmnqcc8UdbeR7s5UyKp4oeFdUTAp9U4rUT6NgjwAD",
  "key42": "3tDLkQ4NXt1cu9zHeWieeUVVSeSUzmUByPHzHV1T6KpnRv2u5nT4gbNRibGhgzuKeuJL8QDaSiMfVjYrmYfrPh7n",
  "key43": "2Bo9MLMqQyoa6zPYiVSX8hupZNnLpoDraSRky48JKWLfueiwJ658sBrjYVW34yi3b6uxTkLbwa1wm6fnQWgtWnRK",
  "key44": "2eqpBazSWx5jLmUSMwNJ3LyNYJJgnssuXPeo1akcAgZ29prDwBLhWd35TD57rLD5qD2Wvx5bLFa3tVuhtnVmf6xC",
  "key45": "5HHDL3fPeofdtU6BjZawAKBdMYWzTprH9kbd6DdPsK4qkgnfBFXmN1GiH3iPByRpZR474JSVFiWpJc1jerJEMt25",
  "key46": "3XwCscAfT7LeE7XbkBzha4xQrMwcC2F6GK1LJjHduAt9sGHnkWUyFEXAzf6xroTMWSiJuAJoMCaX424VyDCMiz6j",
  "key47": "5T9zsryA5mCSPmXJUyLWCERuEWzPc9vE2HSpZFHUa8eRsacmwUtBrkFv7et33V3xpNFuMaw81gQcDgFw2DyD8FuD",
  "key48": "554gGETDKJhsKKzCSbVjzuGPpbSK17wJvHPR4ZQAnG5ags59rCRCTQ6srNWyBPzrddYESBUHKcQSkL9j221YH2s5",
  "key49": "2ungfDsaZoDnZJGY52Sc78fZqV17hCAFAwyv63UdzHc8Q5J3Ao8J96HYwyQ5A3TTVoqDKMgnP2QEnD5n4k3G3ipa"
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
