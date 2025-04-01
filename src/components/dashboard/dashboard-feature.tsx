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
    "4JjCjG5cD2R5q2bxtsffByWjt6LQnW4vQLcKgqtkB7N698MsefkeZwYPFygqGK2FrE93HPSfjsvPWK7ZsoCwFkAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mAUstvcc81TaqcoTWikER4bb9UiEsjp6NkN8eT7Q6ZZhvH9DCRGBFS444Wa4D6CPM2ceUZuEMFomqJ4F6Df1vVw",
  "key1": "5MYxRhjQDMJq5uetxkdiA1t583jNsM6zAvp3tmuwo1dy6uKjNFG5RhKzJTNKdSQGnwZKNF2HQ8fRCsLwwYjNhJ5p",
  "key2": "HsshMUZoM5BouZuqVzKNVofS9oca47qTNLX28d4Y3veXaXJ4rYLjAJHWJ95X8Gj5ehWxMdPPyYvKntBSDPVi2cV",
  "key3": "3iguSG5FTV77UB22MYZ4MdMp74mX2DqcMUjfERFjQNAJXiFxCzkD1GxWzryFADHXZGuGZ63RKNcTd9wrPyi9Ghjx",
  "key4": "2KB8JeA6VYRzFmveQuCj4tU2bED28ijTgTLeTGLZ5sQi6nDzZy9Rjvpmp5Ka7qu16UGjbaGoqkfVY8TwNTs2sXLu",
  "key5": "5Qq4YQ6AJ8nZ3HRRPdQF8WnZEFHgKA7c8nnQAmDTwXvPGcZQowc5eUtnmasy7jmVoYfzPz7CUth64sj26VP4bv4C",
  "key6": "66SoiFkSw6vsAM58prHMgsd8wv2gCbj2D7aTUim3Zrp7wJ5AvGev9kehAkSkHL46RkZymmHcraTdjpmLypFA12L3",
  "key7": "4JASp1wfA5J2hAqcrDRNCGW49Jeag5k1jKMpAQUPfBbER4mAZkq9opow5GzBcFkaQwsMFLuoMikA5axMA6nBt7S7",
  "key8": "xofQ2AVsqv2ccod5KPS4Ws4akdtgYkcbJ8uEQEEXUcqAn4MSzn2UGzK51kvfMoD8GnEy8xp3exmiCTUDpnfHLzP",
  "key9": "62DXWfJkZsGBxZsnVDW3fJv2yZ1cig2d7BZLXAxvnDNPqQuc1XoP8DYtjB2L6ep6XVR5k1Z6MhnzsiN4kGbq1TEY",
  "key10": "YNAggiSCGz4i31VPKydTg3EpsBVjx2ZzBLcEfX5qX6rnDyywtEZj27tRpCF35dRg3NgDhw5aKToYGbY7fawx7VT",
  "key11": "5mLUc2fqjjZc2kKu7ajAbS4ozLcoyVNWEMJdzqLKkf2uc9JheJ5ancxPHYMnD999XpTZQ4B8KytXYM1kNYWN6Xen",
  "key12": "UAmgqbdSQYbqJSPegNLSZJrs9LGwSMALMBUevtHnZ2YHaC9wjELgFzpnLc9itRHV9Ffy5eovEmbML8MEHqV3EKu",
  "key13": "3rSD6By34xgHPszMGva4bnLjPKULUvLEVjA7iGDxEDB69XCxAzEinHFiypfBvHWgy2LTVaJsvfTR95Z8rbtRRhKp",
  "key14": "2LuXfiJTVjUa2oCgxfexFWhjuC2VNNzqKGULCYwmbzztoGAVHnUBs5fUQi8nuXeF3SvXrTGKDNMs9qExKSBMhXgM",
  "key15": "nYun8PAruL8btZmGuY6kHHCgzdHADg3qYKXNWXfeszUwDzoUofVMjGg6bUbzVmARYbCcMo4a3cbFCVRmRrVLrev",
  "key16": "5DhpnbCJi4v43LYzbxQQt9ZapsFFrFpVZ1dGhgqCgs38JQ3UjZBkFsRiBTyVdqx3sduYQCHDFY1mH9nH2EtgL3Um",
  "key17": "4w1sXGA3bu7Yv97wT8434Jx6CmcMcmMbNq8NL3SBcZeYCnncpvMUdLH1rPw2R8L7Fk8f8PDmCs78rz3hKA15V83V",
  "key18": "5CLve4WNJ3wes6BbdPDJCRm2DaeQPrnYdLvMXZ3qKBvjn1MavjVXyYdHZvF6aDXQBasvZj6JPrZDdGpgJKmWngFb",
  "key19": "2mA3jbzKB8czF1yCjncHZYLUSyhJuXeGvXNaz9htwnCk6RXZgfSyitZU2pXLJdMaTtWE3U54cZYHSgJkc8x3MAen",
  "key20": "45FMQ2gN3ssMgJwPg6jXnnRgj2pyj5JWNsL2jNhTJFrGLphG117WkzK7cLrQ3Zz7Agrmf6jpa2hDrRDnSF6wHW4i",
  "key21": "5c9v5WuaK7awZd3wmy1ELAShnixEJ1nRkVoFmoVMedSihvcAvfwRH9dUa3Hximo9VcXQi2Vk9zBPRt7PBrsn7n9b",
  "key22": "kv7SGCSG2ghFKv5ASFR2J4J6ComRWhvSmVBSDKarJrpx2kJWDEfY71ai4PVY1KSXhWs2TW9L1iSXzU32u1WwJDa",
  "key23": "37iTrBHyQmGeYr6ybZhubcgsvwyBcaNoe8M3h7PofJ84A1tCVqr2twwZbjxL2vnVjNjfHbB6UnUc62bWvLAifDfT",
  "key24": "3n5b9N5HKDC3gX6RsZYPqv16WW6j4BqywvaEEAWzkvJGvvDGewQbpCfbo33KRmvH8EnHFUgh2759ywZSsyg69wcz",
  "key25": "qumYaCVkLG5d2jNS5kRttX4QPPz4YHabHrT7ZugR8K5mj6JYBvkqNSvQc2mydKvpCMb9A42P2kX8yh6Yx24w9py",
  "key26": "5Qi8f1Xje4vedRRkxWViEnzFjEwaBf79eiKJhcVMA7JM2Z72zCGxsib6WjXmtvijAScvUVKj85EjQHdNxRS85G5V",
  "key27": "5GwAPsDrLJ9cu78Td9tgaKqwWotUb9ncJvxKrqStjQvD4LbsumDPenRk56mziy5TAKd6K5yc51db4o95LQb69VAr",
  "key28": "3NzB3qC44Yjv72coXi4P7k1TTEh6e8WjtyJ1TtzmKabCk5h15ihAQAwpJNCM8YV9DkJGHPBZuPHjCfG6Sz9HQr86",
  "key29": "51wsnD8BgKraLxTNMwVirPaYgp8GPQdyy61VcKfNXfDvov2nUj2bpH689iiWCVZqhrE6etiFZa3B4Rss7bgHXKik",
  "key30": "par9z4PTAszWJoeva32XXPzyktK3ULnGvZMLPbbReDUs922ueononQ6yuzzjc4Scf3eYxEDYyG7DG2dJG6y31L4",
  "key31": "4A61PJz8UGfqaV1tpUWSGiy9Eg5etRaG7FgfMaUEZkoANt34N6wY63Z4QRU5qkJfaLMdxMCcEKbZrnBMb4WHu83r",
  "key32": "Cf8YEvqQBQC2BNsTCKDUFEYjsoR1BsYnixoWpVr45YNXPvJftwXV9irigiX9q4buN8MFfx8r2yFUfBGpdA7aGq2",
  "key33": "4in6RjSB67QTzF5TQp2BrofqGhXDcgv3RnWEbZWaMgjy94oBSKDL6FhoC84EK2vsRqhydvcpQq457rQWx15DFQiY",
  "key34": "5AZsHdJspSiMJyAVK5SzFnmsnkomdW8Wqh8dJjFMey4RGZPxC2ZPofGz4WaucUF6TsoHUudpaKbUvPfQPrVFYtUg",
  "key35": "57YmRtcFwKTkkUwzURY7mPPBGKjetW2Fv3G24g9QmHYUB5xhDcV7NS6rvMj2JZZTQxH3StYAtQCkz8YyCHMuub76",
  "key36": "5vwbzWG9a264bNZzuKFwc669FQG18Qrd9GUGXD6ms2nGeUPkjQcRBtVtpwpJJtRHi5JrZU7ffYYFjdF23aAHttTe",
  "key37": "5NWQwxQZwVR9c4iEYNmrdyt5tyCRv1i7vAu8vax5q1hAjE1Zry2h3BdSQmHkDVaYnEdWjxgN818i8D7XWnSRkFQP",
  "key38": "3SiQKLCgMde9jAGGx24WdFqFrE9GfEqRvNbC6Niottou8jSxPrMspCurRvPbXeSwnaRUMwL8KXufxkzcVpnucfry",
  "key39": "4z9t3PBTWUg7RoyDbP8FkPc18fR83u6zx4RXnzTz53UrhT9BgdcvpDCwzsq9DtnvsuFiaKvewYF8M6oRbZQpKJbE",
  "key40": "r5xfYmUFCHGoCfiuLA8fzV25tY7AqKbw2cTeUDjC89GzCfYYftRsa2wMUbbKZrAtFssn47Ey5NRkkM7yQ4DNye7",
  "key41": "4Hb4kGubwdx4k2bP46zYj9bStyY9dtcEaAjDkwQsXvxufbrogttmJxi8WnDA5i49DRqTrGcxmU1WxLeBmCBLGx9B",
  "key42": "22QRH79HygFrJ9HjWU165SurkBpx7eUvmXjo1CWSt6yVtsmgxXL7kr4Q6yQ9q3ZqtSpxB9b7WcPy4ER4Wae4FTcP",
  "key43": "5FZ1kXTk9Q1km2qEeVyCh7gNSzdgrkNUfn4v8ecJrwQhUBUr9FV4234LWqzgPg1hiTZQvFH6JbATanCvVDsQyCiW",
  "key44": "2Wfjcxtu8WebW7UC6Exhpz9F1YhWQyFqJazgTpJ5n5D8ULpnLxsGbUFnM1WfXeVVKtezt12UJtLLDzTdhAf9fnBF",
  "key45": "5n3HpcHapmZcHoBSj37HY8uySodJQCBzQMXVo9Dd1nUEgHNSYbsLh5uiKqi7PXJPk4QTATM4QCMEufEZsSMZ5yxE",
  "key46": "53enekaWQABb5eZikk9Xu4Rm5DvUrZNVgDhf4gaheu8epwjfjaePnBoYg3SPt3MwtRdM2fd6tTAsnarGFZhzQpAs",
  "key47": "419kYdmohsLSAfwta8bKgy5b3ectCqqtQ2FhQziwsGxet41hcig8jSLHgJRSmxzmA8zr5tRpVMLR71tBcBYACVDT"
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
