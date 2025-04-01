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
    "2mEW1YKvW4iUy5VUDEvZKR2U1KEoqy5DoSUsKouWXwRZcrPuTHWTaXic3iBiejETUa797i2rzQnDuwGidrRFZPuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HRY3vzUSPAMuCP4Mgcs1gG5egZ1c4hZm23nctvRKSSqvudPHvUAUPYArGmnXjWxdNLzwFVmf6saxdFpZ18AqFeB",
  "key1": "3vmoEscuRqYUU68Y6yDBEt2HZFECBQ6dFUbHqEDRgafa3vdZbGf73aM1f3fd1gu7ZKzSUHB1JDfRwaCVgTzMfgy8",
  "key2": "4cqBpbaoEqZnJiecWkaydztdSKYJAvmuCfSPJFmnLsPnnGA34R2B98KVQrUSZQXGmifhKLDBGMEx5mmgfyx7mmJk",
  "key3": "uPYTKm3AoyRWwXRVAD34BaRKsyiKgpBoRWAvMhzwy8ZBPjChPorJx6WW777kTDwRKzZzbKpACvw2s4Qb1b2BTjs",
  "key4": "2RSckhzwusaA974duMZ7f4uucp38ABnTLdVnGrn2BkHzNt3zSVXPLm8w7Sno8dGZqAjpcyd3LRNDhwqUPJkuyRcr",
  "key5": "2wRJS67JX7nD8pjEAHjQCWKTov3WwFvPzF271ChZ2MXEdNuQJs5ZVw6RHyEUwjNDaDgVtY8Hsn1rXTnTG1KbHEZR",
  "key6": "4sZLnFyYzFgcWEYeM1pJsan43gPJo6uAuAFD7eBQGp6tpYDw35yFfsvv7EVvpY9PxJy2Rrt3KyrWPrtrGWcQ83JF",
  "key7": "61n7kYhqQacbHv49ncqwWyum6Qtu7gGgQqPSuBKdKYAuHXYvHycdcbqvydXwr6NSSjYvxT6mF2Qqev9vkx49LXXj",
  "key8": "hjn6mgJhNEzQV1QC9vRk9XpGdpSqW8wUrV8wYGvhRhYp2XUcrbXjQEVPTUNFExPHu7jZrU4emdzdTM8y6iyYdqE",
  "key9": "4iEsz5D8Z4Vcm6zxtbUEBch4eHjsx8zHqpHCQ3HetNhQtNqLVhWwFg48MQweYAMdV38Mc3ZNw2xGbstzGp2p9Nbh",
  "key10": "9j7Td2ajq3RgV2PKiaQndxsij314Yoz6XhEgmAwR9qJe7dPsmA76osCGbgu8T22fDd2DTkMq4NXjqJfaxfv7idM",
  "key11": "5gfGqe77DiH9nTvPJg3YuHP3BqH13XEJfgarp43hbw8e1yq8SzZwcDqjGxLFboaAMa3KvqNKnAgHNjyeXaQBdkv4",
  "key12": "4rdxEibRAaETrp3gwXtXAa9vfu3dTjjVvZh6qmjKFY52hknLB45ksmmN9KqhDgoCwecgfapSfo4tzhn9WsHdbTio",
  "key13": "Vm6Fw3pxnczcSN7eqhYSP71j3UqRVw98AmpMrKpNGxoD1un5zYi4pHHqwWSQKxQNtstvD7oUusQTmmR3VWAT2vF",
  "key14": "4ZkZt9bQB6w8C9M888yKcuaq2WSbA6XU4Zxdbj4AQRkQQWFepqaEUQYi1Y3WYsbM3jdpjhcpp8DJw4p2uLrtM2fM",
  "key15": "sM92zqJyLMR8fByStW62pwNys1fTGt2KsjEm8mDEhapfaQzTDv488weJQp42F3C1ynTxemV5z1b2ZcXbPkYwnx2",
  "key16": "51oSUCZwVWswJ2nsDLTEyeFGjiizprAQx59oj9FFVowAeQvRBN9u931dmRhHNQ7Kcs7sH32LkQkr4RCJNiGwwP5f",
  "key17": "4jatzru4wqNyVCnBtesAcs6r9Zg6hhaGy2mWsLEtN9mWVgQij9fU9u7Uh2ct1Sys8KDvdSU79snQCxkfFDfuVmnh",
  "key18": "YE3H1us72K1sTXyWab1VKb2qLjAg8ugyK1xA41ERT99bs6Cej9Z8619pYGbhY5pF2S6XHa3rajD4EBTcNFCt5ZR",
  "key19": "PW5w7HrXGQ58SndRTyD1qdg6g9MfFcCDP4Kct2oJrvESE4vvK6azZUz5WkMasnYF6xtU4dtJsWqHLuLsin3uvU1",
  "key20": "4VhSbLoLKqu7JLjCxS1se9s8KzyfjEGpfU8MKxJBiRNyFc3HwH8gqqC62C4xcyWJ89Y79b1YFF47t4F6YiU6rCBS",
  "key21": "27itpHNxcAtvRdyhUSUvKFAhJGpiEpH2KXR5PUXtuF6DUVGQHyenFynZRVQrfEURpJcNFUuDdqg8gknNp4vdLS5h",
  "key22": "2NeeZWiutGJb4vNxT3ofAMR741o4YWxNuHfTWXY7RWTmquWgz7L4KGqfi886QU72C4zwkKRcZxA6UNR2LckAvAHa",
  "key23": "4TKR6Yc5Ttn7HiXhSbVgpb6ZcKwrWcdXcybV9BwExyxdNXxsUXZRJeSNau5XCGNX5LhB3WmQyzXad6rBTBKByTei",
  "key24": "CnEXUnZ7U2jRHALoJuSVuQF8A4BmHSd5LKghk3kfA1x4vjzXy6osjEShoT4vUxx7Nfjcg4f4eiTt1su6EG35fvi",
  "key25": "2XmyPR3AVfedfKFQuXrztXYktij5VeWEjvuNp1xdRVprrVMAU44Lak12ggmbJjUbFboj9MSKSkhmYHvRasP7aXWo",
  "key26": "4qyjEMx9YYXxDsLGHqLhutZxnNCfsxvDRcZhACKbDnGSCyVNag91fzLcix6VX4cnrCJro5sW5NfZBJ6kshoMAqdK",
  "key27": "3kcvyv5jKknbB9N3gzLWsS475hE3sTU36N8A3HwAoaU6fQhhGsmwJS2wK8sCk2zBXsy6vtVj9gZop3eaUt7TpvAb",
  "key28": "2ixYkEN9NNAaQekLZWpP7mjPzLZ6QovyWFxy1JcwKfjnX2foaiVoHNZcCBimsCePXW1WWe71Urc6VPKTvZAiJ2t8",
  "key29": "3tAnroHnpu9t1FDsPyD6buZjkwqjDgAui4WTm8XeKB3jgqepgsH3SFv1A7eUENrhZAtYj7zfdJ3XgMe9XXPwh33n",
  "key30": "4eejD2JFgKSSYFLmjSXvWmuUPcUtjQEQSgyYRsnhTBnCQUTSD919PbGTnS6yDXdf1dNQNEnVTLEb34oPGvhcLNhG",
  "key31": "4j6bJt4eQ2U8jRW17cM2hzfF4ZvbDG1EgFGTaZu1RsnrTXdgkPpRXXHsX7ZH86JyivfZHgX7Sg9pqJfTv1EvviXc",
  "key32": "4L4i4qmBUdeoAyPYb6MxjcutDFK35YyDvePjDoDzQUds2AzS1utcbdjX7BRaqUgDYq94d6Qr1RKbhLag4YpULDab",
  "key33": "4ve5MhaSN8XNUX5sWN1K78HbkWcz6qfvy464PVHGRUmGABdFcvtRCQjJ8ZDSj2CcNJ6nuR8uWgYapWDqrDmWGoK9",
  "key34": "WRvftXSp4LR2vavDvyY74HxjTR5ooQX9rqNr9RmBWM8gk7Z39j7wtDco5Q8d14YeDFNMv9NsrgHpqV8Gx52H4KZ",
  "key35": "4ot3HFbdfCLVghz891FeUJ3kJALCtCfhjnEmTM7JJfmQkpKsguhaKo6YtCdE8X6eUPoCkgn8W7phLraHiWB1Vvvz",
  "key36": "3nwcGWoGJvSovR3NPzX2uCAmTfYSXUtPs4QUoKN4Z1WSNX5ZmZj8AoE9orm6PTA8zNaz3qX2NTZXS2c4tZBTjadX",
  "key37": "2LdJXu5Ttk5tb4jZczWHQTU32JWjBbRyzEnRm3vUENb4N61nYCqzyTV8wvKyZW7Dbs3d3H9wa9tmTbYTyTbbnFTd",
  "key38": "48Vg4Dxd8vGxEQUEGG46S1ZxaeZCfeJBbZXQRqxnwXDRx5i6NcgzBt2dfhdn5CukcYUodgpNBbQeFr12uSN5QEZJ",
  "key39": "5ESSnykSiRjwwBD6EiNLepBAfUwF4iZh7eju3Qs6o1RQt1Grt8hfUNtZnAGp1xsYBpsagEtG16w6bVP6N5NHgU6G",
  "key40": "6kYhBEnQWbq9YwEG6StJkCrdjKQ1dEofftmKZ7cCrVHxmgzvgHJR4Ypsbd1NmJgYpVhS6UL4kBJPHdLZszKSCQh",
  "key41": "2zPx2F15Qzadb6oYnPKJHSzJ6nGR4hPt8NV4uK61eWiosvZc9qpGk6GRjTn8gHhH1APa8SFXEidnTf8W9SMekHBQ",
  "key42": "5bTddeyv6FSNkrm7C17Ng8GczjBM4exfo4G1rkijAHW6DNEBEmCYVbQyoAgudftkxyzTWLKv67aua2vLydM1eXi5"
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
