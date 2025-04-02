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
    "2nBetYAK3HkFAr8yvhNAuyn5qEkwPgMMPKjwgJ9AZyc1vESQC21mthB3LBdEKQ3ZNxDuW9xqzUUpHbxkCn1mbHoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y82xoL2S8keQqNPudnVRp9gu6vKs1eu9pAqMBDioFot6jjMk7qEmB2q4qkfkA2GhoBA77cszzoZDHXdCMA4kK5C",
  "key1": "4cDTMaMZDkF2rT9kWQvxX86zPHNmHboJDoKUht2Kv8TVZaYGjftJixrrWf9YLSKA4SSgZGack626VGWpJ9tNYbvD",
  "key2": "5FEAEUTXcttvUzTSnc9vuhqriEuxc9c7AMhknVCBEX1yfKrwVizHtj9XA9ox9qbd9snTsHMhYP86aafC9DCtex12",
  "key3": "67EgtCHSYvNSpVMwa4NACVVWtCmZEnpGX1VJr9RcbQ8BfpgGQ7EWswgb5yhKHDWCBCvSfC1A53N5VGh8ZvUcKcd3",
  "key4": "4k3bpPKwNVwuN5eAFXWMrWQpziNQAtiYf5KWFoGqaUGea4QSQmXSPEG1zDmp9C2aTaTwy1aajYBtusHhv1od9N8R",
  "key5": "62KuQfZ1TtVnGKKPV91LGJMXubvaXg9nMLNLVYKB6CCWYWJQJTTSHdaj4VQxrQNC9NHqkQK8C1YgNK3BbsMtjfP8",
  "key6": "5DrZtcHKeGKCzG4rzrccv1JxVGwsMnwDzEPJhXqX4Mh7mow2oDGjV8cAQ8tsbBG5HG4G3CMCTEiqrNBALioJFr4g",
  "key7": "U65UmzTZVZcSPbSUdHgxYy16RxVY7KBkUZakPJoFyadByh6PDAi5UJQ2ee7ZSEXZ2LTnW8NDoGFkpoqWSPsiYZa",
  "key8": "4yQWpzX2RJQt4mAn4FMKnRRoAcMN9UtWxsBzch4XnFA3H1YKPpwa93GFZNtgdcfcgw3UZTQg8t8XfwHqWMCdXzCY",
  "key9": "4g2PX9KtThVHxPnc8gWwy3xu3cQGprbgN78zVGdMb8gx6NxRWiLWws5xJiPYdDFp87tzE9TSam1SEBfWnzWus1ee",
  "key10": "2U4hjPEfXFUdMvYUdb32Zijs821nGtqrfo97buyQ3mGMcT9N2FbdJHHZGd7MS7ogNVaEdSZJD2yJ6kU8DJcsgXzv",
  "key11": "45VG9XuFGBCYPyjRCraZaDnh98T63dXJDKKJPWG1hejxTyLsgrR5KZVFM75TdEwbfpLKM6G6Z3EHvM2WgVWgUr3V",
  "key12": "2w2FznB7izXTB64gxTpsXKdJK6HFTLvMpJHfQLvHXkHismEDWHeEHVc5Z2PJ7rPfF3Xs4N6RH6KkM4TmMFUx1tG3",
  "key13": "moCbxaAV9iNpFqPkabe2YtLhkJ27MK8tZiGGsN3kfA4vWSVCaQHzq1CRNy8tB5Gkmmvti5n8WJCSA5amf6maCdf",
  "key14": "Qpfibc2HGeVtnujLWLJRE7byEQzrwXcfoF48Aig14bV81Taf52ZkrxUzwKSRXqhjq4yqCq2TUVB7HxQ4abkZnea",
  "key15": "3vuwtyik2YE4TrFddqPKQuciSYsLrzGTSjmNyLhKsBN3vVvWY4sWTQMWMcLZicdAZPp3XVetC813NASmWs3LycM6",
  "key16": "3zN4SFYJry7WoeZY2Xr9cfHSX5EtD7DDeD6aqLu4NRmW66NAdTeWwav4nDDLHcGx5kscAsx7pTpSSv2MPYkdJTTV",
  "key17": "2k1ToE738M3EDANXvgT3GdUGviPUPeU1HLzRsKxEUFYW97wZYsM1TyUPHkAWUEcZeT3rWY2YMPz6ZkMdjwsJgGLF",
  "key18": "295J3xvwEH57RND6ipHW5Hm5HVkHbJXFes2hAjycWKjsByt2UfmABShEwroVZH2oT6iZWUS9BAb2odaiFjPhiGhn",
  "key19": "Rj4U61VF6gafUEmUUFGyUpZtbTaXgerANJycvLwgr5HUngmHGoxkYM1hjJUTS29GDrzAHdr7hdNaKq2Wa2bY8oo",
  "key20": "21zyXVCujBuBoPBAkbLnoLWrw2CC4PENgVn6TzAaD7N6Uy2JstgK2jNcpMTLXZmLau5x9rmGN9rJHAArB8bXNpR8",
  "key21": "5dofRDfMAXKtVwmWjJGrzzmSpwEJcLtUgCYKn98RuPrck4SMm1VT3VH9xfSQPWZos1yDkSqzdNQvLKdCQz1GfTQ4",
  "key22": "fpAnuAnyHwQh8TTs79dunsFjbNS6MFC4iQ6AfHpfjnkN8MjXkGJvwkakoqf1qmZTrtymF7exavZcH6q8CfVvxNV",
  "key23": "5PYRcfHQfswGsYwDE1SxJhC8afd3k2S81TgNW3fYmS8Zex6uABB2kXVB2r1DGju456vzTo3uszDeCuCNx5JamEwG",
  "key24": "22V6fEmCeKkPpt6YkvfySTddCcdF9JW3aRubs3YhTYgooP3CpX1EwZSLb4pLg4oDBoJJZvGfo512AHWVv6WMLR1h",
  "key25": "4jPYMWYV71JncZ6v1LmMg434fo2Ks8kAU73X2Y1nKPeKgqKN6cEmrSnMjz6EgYWk3xEDi2pQ6bNkgLoB5sPTJvCp",
  "key26": "3xHukgtyyGRMEovcRwqGLnfYg4vYzQxEwRomBTdnPxJQEFhUAqNU2Gh2awKdu2TooQnEaUXyvRggCT2Ad11uphF",
  "key27": "3dG1m23byxPBjGqkLjtNyWKR38UfkxnvPzMZJ1KYLptSiToQwvobqdAp8L1UKMmimBrmQPtbqM8qLXH5XSi23zfK",
  "key28": "2HzPoJ8QeK47Y31C3XxfLd7NgqmG4b9LhzqJNcfNBAPDqSFvCWGHSoYewFVqUeuAtWn25zRdZQFJuWZRdqZaQ3du",
  "key29": "4UeTeqBv8DMibSZZNEVMPWDgwUbAiin9n1jP7M7gKbEgiXkrEoU4n8GCrXFwHR3F7treSFSaZhcMx4HNeyz4YZnn",
  "key30": "2Re9DVGh1UFj8iCqr6w4FvYjm2KZgtZjnk4zjSGiRtfMkGqM9WABVp5Kw4xwVPnq31jzBoZzJ1XiH6EtmVZg75eM",
  "key31": "4C2n7CLeTGUP2hekbKXzZgHGbi6KMc7dnBbzP2Q7vfbjuuDfqrmjVuDJtgPERaJZxhc7ddaapWn5vsx63KLGVNR8"
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
