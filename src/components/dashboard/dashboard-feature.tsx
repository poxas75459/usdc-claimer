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
    "zNWrYVxgcW1oZcaKhchLoTUnTEoQEaegRveLaQZYVdWxUvYQ1yeRRED57qN1L5xSCn9uUbx2rtR1t3MMzxmX4mb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "788P7k5LGn7rN2iw2JTWQjVYStv13WiAvTM38FMUdRATufpRp3nXytv4WXUdA4tEHsmcTwZy1bWrjY1B58xRBg2",
  "key1": "5nsMyFEYjBPSoMhNENPota7UUk4HtjtWpoF6hYK7STpTDR6ocyK61PkZeiYB4kWFjYwCEzACgLMUxfMhv9V2v1wH",
  "key2": "Eg7DjRjAqeh95i2RKSeYbEFBs4JjYZJUGVcwxnivhhHUTmRg3VAzEkaFdrfENMoJW4jK9qZukXnh8TrHn98mV3t",
  "key3": "yZjFW6iTFyX6AstHqvk7tmwvQ68t4htFrJc4Z1yhP71ohkW5qqu3wGr1CFw6qko9GAEz6nzMUCZY6Y3uDNjA7ts",
  "key4": "3F6utGJWNDHfKYXUR8WAqeq6msvvhrUXkGy3Cyz12rR9tSj1dzmX5gsQSh4rjPb9PdVoy1ijeMvRnTLrumNXPSxj",
  "key5": "47q6dM89jcJw8cAmiL37zxgiBUxS5s5KpxG8oRM1a63rdsXpwgBDiKZCWKAA8qqFQXTGVMTPTkNm1P8wMhN8buLc",
  "key6": "4yb7goipuxc8n953zDnJDYvheRpvcW7M1qG1ZmvXWsMNtwHcKYgVNEufAaDN2kEmGGnevM6xyqFrV6yFuJMo26WX",
  "key7": "2MCu4KugLSXp553WYtWCR5XF3ZYnoyeJqNfmZAE7QinSVqjDBq1vZm7JTthquej4kZWo7aXkH1Ywea4tD23eFqFn",
  "key8": "4KRCQ1HDfnvVSLRkHM1iC93H5KvqfkxFmChVfdqx4pguVvHFEpLMpv7nQ58iarADirEcKC59GjKEeZMULdbjxTTm",
  "key9": "55xrxCq7EumBXZcMzLkoHdDemcydNWDSZ6pm6KDSBhzYXRbL13rxN7kyrnzPX38ZR1puzhKzWYmp7WUaVJd2YZXz",
  "key10": "3ZeCdcnmw4235MrPbYmShxG3JcsTgThK6VfmJ4PphA1wiPi1t2ryHVQwHB55aebrivTLcPYZZsUwm9AkNsWutoMm",
  "key11": "4wwrjENWVLkvwQ9xvKqDA9r5KifkSZSY8Ljc9MUY7J9nbPKHAVGCEFvoRLk6KHz4nbeVwCT7YwpdyZdQWmgRpj3g",
  "key12": "59afuzj6mhCaqjb7QjeSSjK83CWhf2KsCqH6nG1rVceoyqvVYXAW2PNPthkoNQjHcxL3NFao4US9nntbKRka7xkF",
  "key13": "5PHSvWh3KXwXDC2HBPnYVwjSZEy6AYgFnAuVdX48ZiwVu9LJrUXUrYFVNYFPWMCtStsxMFWK2QLZxSHTUwfPbRa4",
  "key14": "3cwoFza7zv5EYBKjhgCdpaLf92Ui1UnBkTbWDjkudTvmVt1in8JbmyM5gEEvio7w1oWnbaTN5K55tp5xAY5hpJoT",
  "key15": "4z5PJP19WEotBziHh33NMzuvU7mfgM6P3yRXXo6k9egVAgVHBB1oVtum6Ue94hsBmp3bogH1VpEMtocg9Tsdtvw7",
  "key16": "4imV6JGLHfZuxFFWAzrEM1GGiTk1G3ufbwpkFmrkpaYued5ra6NRLPHQnUGftXWkUg3g5msREThnpeNnNHqrKiJ6",
  "key17": "5z65rQitdEztTpFtcbu42v9c64kxKyQyoNMFkCLbTLKiWYWoHAHHCs8hpoux2yo6NBqPqbvRpcFUwTvWwPMLeZff",
  "key18": "5uDsVQYCbFw8DfHx4S4QSp82PGVnfzDGGxVntmiBhcWfvvwUirZ9He49h91es11becsHoySoVuXX3ASfUZi94K3r",
  "key19": "4djAJwSNeJTyVsffq4cHz8R5c4bvsrHR3b2uHnGHiENdFB6wHorX1R5C1zopi3B2suN9m41fNYSNtcj6wSF48NE9",
  "key20": "xmmXk2sy966jNopdsg1ZLWBk8idXKQtpio7Q79JVshBkmJPC4jHQUBFMrcHSo95bsjhbJAPauFgjYmPs5UWSF3B",
  "key21": "5D8qNPrQkAVk3kZEnEqMXWfbUkin6ybXKdFgnJU9ryckykuikvtsPX1YuEaFFrJDG6oXPmViWxatb2NAK81ruC5x",
  "key22": "2L1i2yM9UbiKs9CxvSFqhohMR1J77QDERiaw57z4fyAECrWSZXtzX23gJ7zCEKmQ8KnZjfbqzAkpFVgSCdittobA",
  "key23": "3vERUdw1j6f28DWLxsZRzQV6eC1BwWiobGhNdi7L8N7aaZ5ixULTiA5cWcg96nVTgqf9egRKFUPd1BBL23mRVoH1",
  "key24": "2RoBH4pmTdQRoFttjifwBp6dEFueJ24TBxh2kK2UukxmUq6ZHYFHoX3H8f48qq64Y59YEerncS2DuE29Nf5TiU4W",
  "key25": "2QfU3JBBfLTaa8aUrjN6Mq1itnZmJD59HPQEJZ55jCSwP8sXX2ernXuHPuRy6kfzstsR988DGzaZ617rHvVSzZz7",
  "key26": "nxqt7kpyx9fQEvJJhSSR17qdYuAy9uNzRkCtw28V5ii4xZWvCLkcf5RpoE4YbVbqGah5vQ2DFKcynp2jKmLpsSU",
  "key27": "1qeh5SQy5jyjdPHoffnP3hmHdbgnSLzk9qmcbmPviBL21DKsANDXA2hvXdPtXhJtMAfFUzwpwMnjfm4QfjJ5BFq",
  "key28": "4Ym4adW2uQv9dyfzegvrUpvgxtiXpMaZ5QNc7VDYkqUnb2Z4kSJmAH8UjFiGTQ2pXCeDY26Lq6XEeTBWQbCp7Gdz",
  "key29": "3cgxPG2viV4cBZzDWijp5LPrAvraxCtSvQEAaaRBR8R8NYwi2atJ7i61h9671vpxPBy23XYcqbC6TXz6BbJsWVim",
  "key30": "2r8XoM7i9vNLavQniBNQjxoi6rX9XCXruHzRxLkntUrXGMwZYaxdwvCiDnva7sJ4NWcn7uPcrQDHxsV8c3thnaxz",
  "key31": "3rjz5PWrKtjAMQ9o7gTz12dnKbguVwR1b7wjmKscgAxiiTAB4yzbVc66amJBRcioCFS7vrwJRAbQF4MacEAvYxeZ",
  "key32": "2gG2xNDAwUyA3YXVZz1RQz6mb93ejBZwtvzVpyFddRXn6iEDQwwujAcSRaCi3xT9tzNaqyT39KtQkAxLwa9SfDCu",
  "key33": "2qiFFxXt8zErKzLqzgLuciYEVFUPo11DNyJR7i2RnRonPL9tGf3fQwpwLYNjo1ZJdcuoCg9Ycf4f9KbNtSAP9kxe",
  "key34": "2aNW1QHMeusexKKYRFfRc5qVgvVHht4qVdCWmrQyJvh6raQernY1MqPPxC44Kf2FnmmnAKRkgXVWwFxE42ePCAh5",
  "key35": "42JmNhTdggbzTrAqcre9vMaCgdQt1QoBX2tkgHdAmi2pbGZLn1a3z95JcUPyCMiUkQNFRtbKMK6UQahEeU8Q9VTf",
  "key36": "4mhMhajmJ6XvdkGdJNBy58XG2kPojKiuf8sr1WVBT66JAqVvACDMpqDrP4nHcgYdu8o9q7W41QLgE3uG2r1c2BN2",
  "key37": "TtNGEzb4D9XA8HxzJ4fAjWwqs5m9qE7YE1htNkhU3ZPX9igXTmoFHoNhCLSAW23irvqFkp6phmAFKWNKeR9t8Db",
  "key38": "43QvqVASGHGLfbmEhvdZYtwWWG1bvj7Td9jwc3sZ4mjBtfgRs33f8VGveExJf5DxqMgjkpg4Zsdpkfqxuo7jc9iH",
  "key39": "4z6g8WqXUZPWi4oQsAc26ga2qX2sqyMpj9dfksgsYM2gA1Rt6vSCKFbmeavJn94qeX62sCqQQxXyd9oqzUf1UKiQ",
  "key40": "4PT4yzDiZxBiXetcRCCc2cjC24HnNRVrQq9AXZXGKqtgTBYriev3Z8KLC57QfH5oVTJ2LtUCUrPVsFMQ679yJMWF",
  "key41": "2v9WWN553YbrYNoyb1bQvXtD4RheFX1tcoDhqV2iisZo7VamvRi4zWtzP2iW1CsZRham3eZJRit5Fbk7ZWdEnnkg"
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
