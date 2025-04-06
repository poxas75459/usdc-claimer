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
    "4cJXJHqSTvRgpTq1uQycsdk4uLM427exESgAorCmgwnDkZR2y1yGtkuv8D5pGoJJ9VVmZP4Hes8tskvV7KRYLCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PvZqRdgS8buFXym3cuFDpMQSrC49YvbtSaS89MR6CeXfjZzw1oKkG8UAkQRz9hRwSYU4aH1GXpXGhTtAWvYLjuJ",
  "key1": "fg7G3HWuCvZ7aAdCLTne1uXeFzSThPBu4pwLywvZvUjk3WK3NHEUoU3eUmCEsS5sezGJZsCzLTWpT1BbsKfmj4D",
  "key2": "2qNUkxSZWZHCbVCNAGsfgRZZqaAjA2xY7hdCjuTQ4og2VErv3XkJWiqcPrbXhq2byTRhCPP3LcVftwyTJHPiuq5y",
  "key3": "WDNLgotA8UNE5UaartEvgzdrm1TTDABoaqQJ7zwxmJ4f6z7NbUphFk2oLsZ7jvJwpCkcgi5RmxTBVMwkg5dKKvB",
  "key4": "2VBq11r5SZHDqK97KriUrAaAMLUqPRLHw6iqbXTE93JLWhCS2KY6YwKgsQMfYTvfdFPsyumTZ5G48CFT3FVeuK3N",
  "key5": "c7bx2BdWyq4b3htEoSUtZFtypczhySMAiZcAcPECJTLR4Vm5EAsBawkWV7bERcqpnesoXJnYQ34TPPBKeHxMHHq",
  "key6": "6314MWbdb1Bj969h961m8xG1Ex9ADBqYERFipNf7BX2fBC4K77UNrmMrnxBuDteTYvNt9a9nchLER7vetjMzGJBX",
  "key7": "3sti1ZqbY7gaLd4LdwfzwfdFd4Mxyug1eqFnVNv8tEiWKqWj1FZSSSq5YS6s1BNpixV748evgfsgBQXcarYngnF7",
  "key8": "2sEGvEhEuCbDn5yy5ubZ4ArbSSXA3saaj4XpMJC9tT39ikHh9f5bsKqTdhfCgqdrHDHEua3evVbbKeH1uBF6sZqC",
  "key9": "5mDrcSn63TGSgHHnsMPZpHE3q5pPAeqobTSLRcspfar9py7JeVH5K4bb3GUb3DdKsizAQJzfsrJGM43RbGwVqD7J",
  "key10": "3PoVDCgqFfC7RuPKi7FogzkvhVBijQViUZGsUbvMhZUUScvghqgW82NtNQBr6n9uwG8Ukr6T22XzXKezJJLcAiq9",
  "key11": "4VSHaFMhSKofEFaw89f8ZAicDVcPjH7rakH16fDZT4uBe21d2CqiMhA7GMQRoJJJwwwhRnLAkcjdrii2UHRzLxZs",
  "key12": "5WvpifYa6oBryD44sgXTVZKSmcGWk8GD9RDQCeYtMezkAq1izKWTzojr2CXT7bdaW2Js8m5tLzR7VqFecVFmhN4E",
  "key13": "62pjkPL2CMydkWshjkV2KQEJkmHRg7RxqDt9NjXGRVXer9YM7hdf7DC6xxYbTd8pyT2PjM52Bn5AJYYrN5MGpX9c",
  "key14": "3mbg9GgRCz1nHcRiW8shJsT2LGtdwx2H4mnyyfBc9djhTGTE6keNeKKZ7YrXYmuQUuaRcAGZp7KV7ALyx6kzDBSV",
  "key15": "5UxsTMdMyGq6pn7mUdvp3WB9Nm7CkMMnfeujDEzn3tB22qo3kixBruQFg5YPCcssHC7fJ1K9SSZNzvqHGMHe5zco",
  "key16": "32pXizkP6Ls1ETAgd1cJZmKDzxbpBG94B2X3MBPbudGMp7ehwcBSSBzkz8Avevh2b8bNWeh7DS6Mdf9StcRwT1M6",
  "key17": "4kaS4HBp8ecQ8uhumWjMqdNHDo28xE3EwQgKdjyqHnvthErEuCggrgzUiFjtdZManKkm5ZwueqKD4dtUErn6iRJw",
  "key18": "3zLE2Bob751mmEoQZsSf9hDxCdPTAv9hiYXLkg21XMiMeJ9gSpqVhBqq5S4nAtWZHjnmnBYeXkXvXHW5REoKHxcB",
  "key19": "5AbQAkMUW3GJEs5w54KjbVgzNpttnbNurcxMEf1MW6tgiGd9bS9BsVisLW6swk1nyxpibb8HRRP4Ph7kMBK1V2cr",
  "key20": "JAbz9qcgMSTukVncpT5g5z1F73VjzA6tQpZqQXa5DLcECZHmuxTs5wDkkgyyojjrv5CAXpMdnVqme7Y7z4SY14Y",
  "key21": "5cz6BBo8NJDWE8Q95onYPPo8S8kNXXNWUvT2hq8FhVnD2sM3NhkF6tQsdYKvCD9ZZy2VfAbny4BdaEeFc8igPFSF",
  "key22": "3iRHb84DDXdK43gLsqUY6foMZtUXUrsC14orKvun7KGAMpDyE8pVf2pMZRZbfXhNLtpsffWP9CFDpYDAGtrEtJ8b",
  "key23": "hLXjisdChHysL8svGVA7G28A6qNBB3kYzZK8PxCuhkHxkEDANmKVynHTHELkg2txVquVtGZy9gSsnM8PmKVYPC9",
  "key24": "2iF7ri7WWVGP4TKaS4j19eiNVTbdEvshvgVVn312eene5z8xj48hVaKNkEygsCT784iqxgxz6nkpJn3qkc7RjyDB",
  "key25": "5eHjmzwo6dFTo7MZtr8koJTrepANdPNyUdrqumE5p2egmSAT6fMRDRpXKmLuLsE1vKnDktpQz6FsxgQU3msno6eF",
  "key26": "61Upv75hboNtrBmHG2CHSyKD8DECgkCkFG3tAfeAhEaYc34MSmDQB9nuSa5LN9Ztt47DxR3rkeNHZNo4aM5jJaVK",
  "key27": "4GHmsasHkngHoJvWupBrXAB1opmDk96YJ3yYTXs2san1VQ4Qvr1LgV8PSK7eK2KKfj4u57PwypyK3UupkZnaH3wQ",
  "key28": "3uPwT5NXx5w1EjvYFBwF72pUfGKXXPDtX2tfaNSQUAGfq4tmZWD4eUs9i8NtajnYN4NweVHtn5WnrkHqXLDTKivv",
  "key29": "43Dp47p2Nx7DGDdcrHfsy7zvftiWeAoQXWQPxVAULKdw39gNv4GMiviDbPXqP6F9hJqVnsaQjvvBaMnpskj1CgbX",
  "key30": "2eisUonnCREvcaKmo3XtvNaX7ELTCXACbndgBcBY3A22jjXW2gnkhv9wfi93nEoyCzUMRMJDg9DGQtgQumenxv4Q",
  "key31": "2gamJ62ugjwhXLeQAFrBCvYHz6Fn75NuEdeoLvDnNe1vgHqEqAkBUSc2eRTP3stjiZDk3zC9SFvsMwgzfwzzTYuh",
  "key32": "3audivYhseX4KJHA7rSGsKvABrvaiqVqtAgHA83LawhUBPkjccf47cn9NPKdFPPEvjRHGU7QuqaTJSvABwHhGAXD",
  "key33": "jHLd5ihv4xhBPzLwS5t4Z2mPua14yEyNuoZAGxSuMgh6a8zqieyJcd7rhwtA2TeggCTmTaeVr9F3BneQH2YDH9n",
  "key34": "4SaRh1TXrb3476QNfbEZZnHNSnLdDUAHMKwPeaZoqy55QpfHm5pnqdutT9gR1U4zVkQZyh58L9V8M2LGcuruiPVY",
  "key35": "3dAukUwu9gZXCrtzHBa4FcAzsYBxqRhSqvLRt72UXjveZhd5rar3R7dEyMLumUTSUpY7yGtQCkuNdBJNRvTtqDjH",
  "key36": "rYtdYW1mtZsAggwu8kQ1xXbWY7CCHk6BrvkbqKPWPPVgrAfozH3GsiqLFEuEog427LNoPsXhvSM1H1vZKPGPKMT",
  "key37": "4orCmiBRwrkGxdvqZ1qc4hhio9A8MZuNKjLPZ2BXBnjx1CmSfD7guGtsm7fZ3parCsgdmLFH8U6s93WcKDDzEEhW",
  "key38": "4FDw8wgqGHDoWfyuDZ3YcpcjPv2vbSa68p48UUZ1YS8gWkWmjhBh5dSZdbMsWwJ4GRjqr76HHM3qtvC7Tdwv8rxG",
  "key39": "2dsnaxWW3ZRaxZ8y9S9vq21r1mGUFFh2RLvCmNQLKVa6yp7HLt2SmNk6Mxbsg1ciCCfM1QPqw5VJvfB965DgVmbi",
  "key40": "XpVkPxEsc6tyUT9uP2Dn7fkHeuvHxUwcu3NEMXm2wwkijtaLN9VwzodQscijn3y29Kc4Zc1iQhUrXntQutpy1Uy"
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
