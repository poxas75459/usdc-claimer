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
    "3jwKjqzVsUMduT91r6RzRBCpnj9xm93YZcdnWxaVkLnwixJ9R123KLvRXBorkM2Pu3eh1y9kJEhoQ33jVe5x5tHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bDP6f9ktshyQ9TyyN1w9G7wBwFAPHBRtpq9fXU9BqGJu6THEzCvB7SQ5TTNUETcUwSAWePrrGZGAdpZq37V8TU7",
  "key1": "2Q61WcDxnViDogSEFVUxicwwcvGDLW18jKUHHH3eHqWRmXZoUPj8zUQods2QfYLXU2NpsMH33c9pbXvkzqjYEHxf",
  "key2": "32KSjC7vJArkcfF9dnKVbcSzmxR32SjuYNuG4cr621gdhCTEyTzzanreovimdcoiykPNdfDbEPbkfNDhtLC2RLM9",
  "key3": "5eRGrtMXmXJ6N8w6eJvA5aE9ep3kW9b7nLJ7xfoH9THp8UPfTPKaJYa9sypxpVmMG7FGTXFBv3ps8GK8ccdQH7GW",
  "key4": "2sHQw1BQgHFivn7t7oVyg2Turd2RR73sABM7H9yEbRGiPfmtmdKpiXAxet2WuYpmeo3TkqtemsShMYeNybt72ebi",
  "key5": "43n3xEmbX4CKE4Admx6yJFaGeUqg2xS1BLL9KaKowzg3dmarXg1KgrwU55aqX5da4LzaF9Upu8zxDZPw5XGrQ8Jv",
  "key6": "LWskaPwUBFoXLFSXsWXMZ6Jg9Ezy4MkDqdac8h9WWppHcnSFdnBUWjg11vWYKRxunK8Hx8B942SzesfmNBw4H4X",
  "key7": "2kY3nyK7dL1qGQdVSH4tELJ86W6gj9K3YoxZHAqmqgpnvabZ3ZDmid3uTU2HrrtFMwZrVUpoLc87mucK3p1jrG2H",
  "key8": "25RHeS9Y6A9NmzUZsqTqNJDtxtR3pK3EBPZGnUPZ8L5jyibnqukcFg5XaPU8tSnMKxVv5TBWQRqejf3QUbwBYySo",
  "key9": "5euWELXDxHaDWHWFUPe6F3dfF1wjRCyknarn3uph4FRduweFSYtVtFNVYzgxbAxjj34cQjaLXb5EmG42Z67iVnDA",
  "key10": "3BcF2q16AsEJEveYcZGbaynESWv5586BwCMT32jMUv8oLTzZHE98gT8JqEuv6utx3SsNkGN7ocTXTKEiGg83qfrM",
  "key11": "2oxEskkLtXaNY3H8zeqbCNh6nPs84qTNeuDJZVXczHc876gVfN3qqszwNZWHWkMbu755YGvUcoRqxeby7GmdzMpX",
  "key12": "5FPetNbA4vnfFhkB2rVCHUNDMhebDfwG9XWab8yDP7Vxsuj8BgdgyoU8beRBEat2tNF8NBF2pJGBHx7MZq7JXMU9",
  "key13": "25XPqKRwS8F4TG4qm1UTN7UdUDv5vz6qzeTLxSLK2XdwUnTNZMUaBzwF1beN9xDgiwrfvJkKEd947ar75Qip9mnY",
  "key14": "3ZjhGcY3Sc3KLpEM7XNSkCjJbZeKQ7m2sx7dCJhErRcf8MyJmTn7kBt8oG6P9c2k2NU1pAW6gdT2gveQkV6gELks",
  "key15": "45s4nm1NrxEAZSo487fDDyXE3qtBhMaE8THdBHZLMGBmSNWsvfA5MMoRbXUsxvtF6KibzYVjs33ipRMQdWjYFQnc",
  "key16": "3ZdebHbh36jR42U6fHsHV2fLeZhwKjqhVSdR7p3VPdFyD7w9bfR7cY73BUkFs6Wkdg8Q9gZJuKvVRHhDiLm7tUti",
  "key17": "2D2B5ByA3HEzb2BYe2PFerSk88Fk8KTxWrwaZtxPvdnN2su9p7FB8jrhnofBk162ono8NcFk66FN9gwKu7DCgKcg",
  "key18": "46qeSbd6VnngccTHjyu7aNHuXnuH3zNUgVTcaoWxZR7qWPvAjtnDNJMie6ZGfLSsh3LFqkj3Ljn5jQQZNWNjbMMQ",
  "key19": "61tQJKD5Qo61kaeh6fMfGFEsKE8zm1K5yciUY4Ms51WCEL1nNazRCUz77jmF78yBVM8c66wzGPxeTHEv25iFMb8m",
  "key20": "2BABaa7RsE2LsELiv2n3BHEf2m2XLNmFJxWXeJFuoHve9LzEZFisQ3s6bUGWCr5YZh4WzEUUSRTaRR546hM4Lm7J",
  "key21": "h2UVCaAKp1V8L2GCF4p9iCygNYmH5keXSNjkgrrL8xw8h5Ehqn49MYDgZ2WxanJtAkkwvu8YZ9mJ7yiNEXioGfd",
  "key22": "5kJgj4H1pxPbMRocVt1hY1T27ppYiAGit7GTbsgGyeDXmbg5jfLsxtNrJENpbrFnvs1w6G4JHTSUt7mY37YrDVfJ",
  "key23": "3DT8YVzgvL5qEGXUyEXZcWB4mNZKtsfXXVcR3JXfQRWP3aUaCpGuL2bDCyhVCScAJouBQECtgSpQxcm3c8G38w2L",
  "key24": "3Xfx9LCQSn9EqhwhChJT8zCE53Ww2oeXdDvoayXZLAXvpP9QojhsJAB8ndzJouWc2GRAMxZo3nfu1hoAXLk828iT",
  "key25": "4M68tSahHBW89xP9B8CoeA9RdUpnwESMNB3w4vZe8MoVc34LYi6KXJpV9webwJbfSCXmT2TS9kc8hTqQnYRGqRwL",
  "key26": "2fccZW8vCYX2Y51ghTWJK6PVbdn4mnHxw7XmkjVMYSZotgk2EGfxYLtHPX8h8BJD7E5KHuBMKt7TY8QK4ikyJr61",
  "key27": "HDDbjhuaw4oWXK4R1dHNyfScgC846wSKiGkggQscJHCuDWsPx6pxMzUkVEdAHqM3GrFZPCKd7XB46mmePQkj9Xi",
  "key28": "61Z1rrW8myEY8CU6QHCAdW2BsmquY6RLicfDi9TijBdQ6JsWZ2qTrgQ6d6CE8uDrbdZdRuuAtMWarUzeCQb6XuyX",
  "key29": "XNsevB7PesU7NTmfQyCgWyyswZrhdxRgA3TmhyeNYrQQFH5vJXx7HwqPttqEQ9iZoqVcUFfydYpH1RYFHSH3yVm",
  "key30": "4snrvupzuW5g5LyDfMsVWgsw4SsuZpUpDhM1yivNjnKVUhHh1Q1QFbhXCnM7JVuWep9kBNZoC5eTHsHLmUDBrMZY",
  "key31": "3LEioLH3eVLharaYmEpbinU3du8HnSJLrkL1LqH6wFz4AMZYH3SWa4cXLa368KKaEruafhnXJ9WukpszKghiQNky",
  "key32": "2e9UuMd3N6wusXSrpErBhYYwCYFgZof4skSRWTA2b7bZR8EhYY3Y3MDvYdKniSmzUCo31c924gnKM4GchdGbSTQG",
  "key33": "tk6veDQvuDCWyoqrhAfwyWBkHs4cNAe4DdRuLx253AjM4o6RpUog1fL5XbvmhBSaXFJVHEtxM8MJUkYNetn2RmB",
  "key34": "3fdjVZh5K1USoAVfmiCo5aCjTKG9UB24ydw7p9fhmhxjjfPf5JMBoefAMLNxYgrw6WHDFJBBEcXNVRp1XmFmVjXr",
  "key35": "9ipqrYJqNZzC9ntNUqwg27qHc1ArtMJNhGw74AQULDFL5QrsCZVYY7m6bRDJKZyt4F54UZpgwo43QALpvFf5Ds7",
  "key36": "SM2aTchfa45o2zLcuJeM73Qiu4u1qHfCPo8PqKnjKDdywAqXQcjZovuJE16h2m6GTPmjchcqcz17TxYc9T5YQau",
  "key37": "37yszG1RZZt5EjfC4XkPK8wk2YrKZxkNLicwBcGhqfXM6Z3pEwcxbYVYjScdDnL5XL2JMwWK7gtfD1rkUtXdDhJE",
  "key38": "3qyKaAjBcQwCsHkxqkMCayP8SM3VHj1VMkV5XiyYWrtD1a6sy15CMMAsFBVLbDwK3bNUpYpTKbCbjab1MMtEkka",
  "key39": "21tSmZikudzYCxMfqkCfwMMcAs2wGRqcD7JMSop7uzyYTPfWTeqZXN3N59kjMJqDHCVgMZaRyfmydcZg4boUAaAe",
  "key40": "2i4D8zRnDRnyJ2RadTpJZ3Ptv5VgYEYJmbWnBWMD8HWTyox8w5oBvbMd4LSpGv1CJXTUwpTMHLbiiHm11Wdzk6Lf"
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
