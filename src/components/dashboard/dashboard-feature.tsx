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
    "UGbWptjmxVPpoUCebUZgtcx5irW3FiS25ZsF4rA5nuD6A1Z1ZoBLtM4ANjntRooRNjbYaojMdRJyz7AjvGH8t39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XfBDqx6feZ17iyNka88WW3vpxPaCa6A1zmRywnZhj9JZFeGJ4YGRJvmUkhwY3ELid5QwnaTjVRbf9EnLmwP9EBv",
  "key1": "oPhTtFJq9WtcnbM8FQGF3p5fhELVj1J2ogngLGcKbbT9pAnuxeBUvKucUzL1o8tNWsQmq77eknDWTPH7FGyqZQz",
  "key2": "MjBzXoNxyroaiwAXynVqYXyZ9dnHJz2MWXShM6JtJQEBkngc2bsKM9gErUKohzRUboTxsJs5p6ajX7th7iniaZA",
  "key3": "2CvMQNHP1FSnAHVd4dqqUHty8PMkoCuFKpDEvNXQ7FRN5G5CJX7SCoQY3gXr2SNuKZxUtwYCtCokkTqPFFUJqGGN",
  "key4": "37XPB5jDXXvLpCzwgKi1xbmnkXcrVg82oWb5tzeNdaBzBtok93BMkvVhdsyz3iLMRdL2cYZqEEpYKF6PHd9GhSkq",
  "key5": "5D6jDDr4vUigdeLZvTVjDX7tPu2x78tnPw5TKVJgJXUrgEHsBSuCKnMEqVwyaEzgfvWtzibXe9HhedcG1M5uC7t6",
  "key6": "3wLu5rnWNE7JE9GdJuhQYhdc6KLTxArtnrUeHsxBveFE2ANdGDkEewAs6BHG6jxMKurbUbTfoFUoy85x3EdTe5U2",
  "key7": "5LLrb4ZSSQSUJgY5PU9ypW6suKvhzKwzngpXSoufxcrxwF6u1jYtVMA7QSAMwa7SRqbDMxFxe54jBGAV4QcLwWHk",
  "key8": "3qiYD9GxQLdK86QyJ3AS5K8eWm2UFcrszvLmjZXbdLZ4AjmURe5AAMWt3B9wGsu8iMTK5WcM1ePdjzHCgGBgtYJM",
  "key9": "5PBfZJndjBwmAGm52sDaF6XjxWBDQrzcmnjm66s8FbwNPVh3aSjeNAzaWMxc7D8NqyufLuSSakgK4LRSLe65qnUD",
  "key10": "k4XboRSaSWGMBvLQLPMkYR56vVV1JaUHgt94rZW61Lhri2gcXY12sdVtnrNwK3V7NDVwAdgDmiG2ii5quX2LvUe",
  "key11": "2eM9meZXdpyaxvxn3fgigQPggCpWQ8FvkmCmZDhqoUDu25pyZE4Qfs4Nh3tUN76Taa5U6yZw7WeRHWTZZFxTz5L7",
  "key12": "j9g44MoEpNQh6NWtnZ9hfu9C9BPFxGg22bAkSYMfCZ754wS7jnEeStZZ1mFTxG6EKgTVwpzY6Quu3Vmcs467X5y",
  "key13": "4hRMqHa7optW7E55VG3q6Cj6EGfDi3i5JT1aszy6GijT2cVXZ53CG8JRc8ZkRqqSKRUv6CYmJAt5xud92CzfNWFq",
  "key14": "2LYf5Ty55e8GiD287AotARJMzhBzezNXFXWiSb82TXUWSrGRPp3Q6RjqxtvTnwBkz1XYDLdGZjiZ4CUFcj9p83F5",
  "key15": "4aaQRS4wF5VAsx7JfuXFZSQVmTGx3XTcLUpmT49qaUXMCrNJMRYAdrp7iRH4vbTrtV7M5f6fTS1JfMFB8fWLCetS",
  "key16": "56aj4vfR1cEdLvuGAvYJcCNcunFZR7qcLZYkNng3BcFB8AYGMsZ6N4pi23TpapECwW24BcyojSjPz4sCzVCxaTXR",
  "key17": "UzKeU5fKh76LprWZ84VsHcLvnQMxC8nj9mL8AWP4gsVXtt7dn4EZBQQqXe7q48W4XTGEbEH1s9p69H9GnKfnJJR",
  "key18": "4SkRSjDfR8rKHSJeCqdax8d5cWoxGaxUYgq6noBAC6LaSHh9YFVXqaR6DRpcWMzHDZhzrQvnWoTosKXNhWNbocmF",
  "key19": "5QB3181q9QaDaRSFYH2WjcNsJTXk8L1oC9k6xKrfr1q79rKq7U9976vrZaugELj9SjkSsUybthR3m5g9w3pRoZbR",
  "key20": "KV7g1fomQD2mM8yRP4mqJhpDwwqASPD3Sz4SRWSDu8PPr9YsvCiEZQyxo7QPyf6gLh8HUhn9HEgVEJcbQg4EmB5",
  "key21": "3rPRizn5KJPufdXEXxcMP96gVQbyWVLwvZhmiJ1GJooJRXn3zymxYPGFMTmTRqxH2Ykepbci5t1KL31KzXnk4vy9",
  "key22": "P3kwD7A6XKFaSuv9izgU4Fh4mqbTmxxHr17EUKZQmwgm6MtfhWPtVsUVHTFke42G36JZE72AiTFAH5A57PWRmHU",
  "key23": "5pZ2h7pXxcFyq42Pi4XaaomJUpEwD6BzwLJgvfGkHPpGTDePS2zHfaX5chWiQsL5Qoo1ghtTanVxBECnECHBdPKJ",
  "key24": "22kRWcWdEZrtVEBig45JWrgxgLmzfx5yppYwfXz7k9YcxM3z8vtpWoCL576UCunxteH83bruhb1Zf3pijWGJ8X1H",
  "key25": "nLReEHnFAn3jEzTGRuJQQW85zTN3EQwMXbc68ASw9nWGCSShwvyE9Uyb4GBwsV2B3S7cu3k9W9iSvBL3ACXvunH",
  "key26": "36Gh5HwfbFjoNAEEbpC4J2yvJZRCWWYn2uYCUYYQzSBLcgJNbxFovrA9uJumo8dJQWwCob2eb8v23hQEmZZdmMiK",
  "key27": "4jwYxv2QZK7LVEwwtfgzht8CnkEPAXMgapKWUNopq2aiXfubvSQqt3ERa7k9pUgYEkPQ7QAKcQ45pjgWMhbWBs6F",
  "key28": "3iTd7oGLkXDfF81pgjTMRKcYgrX9D4T8KiwgB9UK6XuGYF9D8CDVJQYNByZ4dp2DT5SmgxmXomYvqyXPZXF4bCFd",
  "key29": "41Kt3u1av697TBVHBEFgk2svT2abCmddTYknHcV9F6FVXmvt5eHXwdnuagDgSpP5eVLCJAK2kbDjb5rjQZv1P99u",
  "key30": "JDvxiSBWXhwadKXBHCEbUhpMDvXcEykeaRyznkT9twxCTuvCUV7XxfHS57iMF1TWXakoXrcQZdWRjgWD4QkGD2Q",
  "key31": "58HqFV6KgLj8jYLVDFaYGWUZ9j6SFBaDTM372a8SZ6ywDsx6Dkte9BQCXtx9pP457CjdV2BoBMp614d72CmSotU3",
  "key32": "5sjaGKorTKo5SCTRFLNxEBNzxxBLTKmKb5Si8kLyV5BXkXWyZ1dKoLo8ZoSFQU9Fsn57Mp3CSEfYbUNx4k4ftu18",
  "key33": "27v6sfGUNBfstoQ5hqJ8TCa1ME95p7YoXTbzsPZvcxYiv5HPLmiE1oPJjtzrFEhEzeSQYzbfqgE9gTdYP6D8yUYR",
  "key34": "5Kk6squQs13M2hdKgpYbLsbvSTHx9m6tYYvSeDU5RGWbpC2z46ZrPzmTASc6L3C5STuSXsmkGF2ZJJ4HMh7G814W",
  "key35": "TywKE76sptFJiBmKibuXEs1mpy38ZZVWxHBgFKBggQDz971sLCWjxe3SCQLZjNHVa1z87Zt28NrCxSJx7vgoW9v",
  "key36": "cnKNnKALfxWtXpnwo6yaSACnEPErPPfNPWtuzcU76XhwLH7bJjoMgDXHzmka63SDRCrqhhfvZu9pxLAbZHpAtBu",
  "key37": "5hU6LQyCt6Kt7na7cbeyFZihjbJSZDvSabHXVD68ZDkXSKSJtZP8Nap4Aso8jei3adbSnpUChJNu6wx1VigSvsB2",
  "key38": "2R8LNoiDFJxHFzQEKzcjZ8iCLUJNJsPSuKwJtH1xsFLLRXKhh3TG3EiyPrt8mttenEMX2ESJWQCTDWpDYWP9BRq9",
  "key39": "4r6uALwKCtjZ7tc8nKhkzdxJQHRQ7maZMicfC4mi7eBFn6hnGNWytcb3kCNeDNSFvsoEgK5iJatNFHBV1m32WEws",
  "key40": "5hSRW8784AzzHJy57uQ5tyFK3tAJgmmC2PoaXmh5cUhi427UZfdGyvCKj5MpqeeybCPBQCXENmLkdAUNYw7uwKd",
  "key41": "59jbw25wkeQJSztDZvCocCDuqVEmJcqoyZb7F9k7TUxbyxkEbt7X1Wmq8ZsLqz6b9YczU1CD1PAVjis6pJhKWehH",
  "key42": "7M4Y9VoeBzjcRrzwnaVejadiMHfvS62vzku8ckeAiEVFezmv2WsbPiTn1sCRrpMUn3KrEhL4FGFhViifmNtnBuk",
  "key43": "rSzaaYV2H1YS2vVHB5RR8U4vAUv3CkwJ95QoMgdfaxbCuL1NJvyxkZYfJwoeFCFy31nxwc37cXe5C52BQU2C6Bh",
  "key44": "2mh4z1F7Q8s13ejjo7YusbwkXkpJMkp4WHFcYLQ5SYxKQtCG3i2bDqXVkwEdUDiy5PKdBPsoAeZk9Yd1khA6ovrt",
  "key45": "3j3S9ZY5q22PwCZKEdV7EAYtE2gEtXh3djuQyhZPNMDDs5KJmDet3vU788nNmjqfebjXbBt5P4yGmK2uP39kYAV7",
  "key46": "4va3tgZQqvu6EHTkvvZzKqKtGVS64Fukb2wgU9Ve7vRBkB3q6w1sdT4tdSpj4WyZsUxp8aG4ZbeRo9ZV6omrXbiF"
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
