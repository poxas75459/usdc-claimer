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
    "2vmfDSti6TQpRwAzSgdXCDyDftAGkdKKxmYWRpUc77gdCTrWww43uC1VLcseDXbyPVW2MNo64SxQcrqZ7rJCFihf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BCuh35LKGvSDD2V1mR7sfuxa4fWXGBArBmHAgjkpEyzz8iAWnPUwGiK8NMjwNz2VsotgTeMUMXiMZ5wifLhwbyd",
  "key1": "3WVFdDSqYNX3aW5CXvGSZE4iNd31t7ow21usYbyGs418q1ewLbnwDob4wFVcAMDZv4LUw1M2S9MrnresqrkYxvqG",
  "key2": "3WKt7qwjW9Wgexoju2ZuPcpZfjkbm2jPb1qy1GKgCXiHXLFHTye7ufPEZogiTnSP3pYxXYgf515x78HGu6BPyNxr",
  "key3": "5bUd9VczwGnvAa88TixWJCU8U4rhqyV4CCCq5UoTnjtnsXpFokoCH72BXiXftjdYaqSYeDrM3AbHzNn5cMzc9eFk",
  "key4": "4PVaHHciKE5BPvm2xMSZyguxLKrUfkcEpCYGcW3uyacEb9K4RJKChyPhoqWVCnuHeemEAf7DAY4VZ77zksGA38Ju",
  "key5": "31o6zqe7zrLxfFozjb2qXxw2CaB1EKf1Jh1EvLbsECtTYcM7zK5KEKjmaYy2yXt3UTdSiJY1oWv87PzDGspisPEs",
  "key6": "2hQME186uPWoENj2gb5Edn75197gN2U4hhtmbv5PKD7NfC3K79GPC8pmKL5fr1k7AzLkKtoWTjegS22yn9SocZ49",
  "key7": "3nFEMJ9ZwjHCNrN2e432fmWb4hrJzBdE2mGYizpRiaPQwveiVkQhiZin9Htn1XMZCFsaC1LWypadKPZC4UDV7yfp",
  "key8": "2BXWTLnsPCSJ8cX3uC9KLqSygq3uukN7sF3czZ9BtdYNkKtkCzSYgWT7Byrr7183VdJnfqqCU7hKd2yfFcj2WNKA",
  "key9": "2257NhZqbHQkLc5mNR6huMTmvEUmbzeSsrh27H6Ztmx77MbXUFCve7Sf17gHY5iTgxsSSqADtNMMgqRRohjeuNhY",
  "key10": "4Z2Y4w45y3BwRJ3BEgShHU8W5mUuruV6mCjq5TDsgDUXaW7tUGdny67E4YjZopyT9e2Z9Vr65Rj9igQkuDPviNW8",
  "key11": "29Ks4B9ixo2rmmeqRz2Qknbcd5tKJ6XaGZHNHws4K8LRsPDQbkbqwSqGThpTkRpYqCxEDuMV5Z5wgKJeFymNfk3u",
  "key12": "65DxvWmtSLppPcTi4qzXRPiYsRFtijfFSrvPoXYYdMvk5rUnNEdGXUt21CYoTnmXaSrTRwK9gCDL2SCTpgtHhnYT",
  "key13": "3R665MZd5WYJi3xgs4ptywZcJjGrT5ezrcpHsYruQSWYoLBFyemdajnuQNW4ZFU39spC97kV7NFH63P3EBYbq5PQ",
  "key14": "3xMqMrHbijewofDWkyKgQUyJx2yBf9T2APtjTpVtw6hwPE8LWjMJekgK6dtC2jguomKXJGFgiqeDfQCi2oL1w5rS",
  "key15": "4BXm9wHRQ7wUeiXQoo5S6MZEh4czFPaP2Y3hqEMfPNVPybjSN15dic2K1cAeJsy3dC2ujXSQKLDF8VLHK38LmDwR",
  "key16": "2wutSWZjixAq4PzA1j9B4oZghVC3xjid1jXN2cSQWMazpcPbtc6cPW9xiNcpBP32mrNbrtjyKm3rZ2U8UKgfCd3N",
  "key17": "ufvFvZRUXHfXzZPr2E7kMdKwmJNDYkGNYeT1p5wVLtUem4WMyPc2ENKiR2y7NN1v2At4Jn7hkxQZA53vz4MkCGE",
  "key18": "Htpowrvoqwfnvdo2ebnc6r3jAa4PfqFKPKtXkb6JLXWLxqPKfupuyxdZ8DzWEDfu2wArgQTT1GKZzVk2PeDd2Dz",
  "key19": "4L4vNBh2aKSBLJugk7tmxopn7jojEooPjt3Jhc4yj1yyFXLy3g3wZn5bYJiXg43CV2k2wUNZpbZ9onNNSaX1J2CU",
  "key20": "3T9uyJnjwQ6SeZYR8eKC7awjFXCaYBT3iHNBSzrCEoWVFiWFCxj3jfgDgKLFFEkKyb9pFe49iZWFA7ZcbdnM2R9Y",
  "key21": "4K1Sh68qxB7dY2bbiLcbnJPrhq2rKDdzjpoUxE1ryDPYcYEQGgwbHD7CqgJaCWHqyiAJH4xBa9JvgiD7jSkJWiZy",
  "key22": "ZzBLGdHv8rSG9tJ5B3HoP8RUnADK5t2qwugRr5pJCezb7d2zT1qmQrreS1tmhKNdMswGWMyrZfMdCWLCMhUQDKq",
  "key23": "5YuC683YgyNtHGniqYdvMwTjM22ZPwFTAb1iSdovR5gjsWtW4pMBcEPuHsTexSNbwzZikoEb8F83KKzazhxnvEB3",
  "key24": "3brwrcqL8MpRizxKrFgEjFqVEGHNrgiq27oz6ixMa3wwk9LduQZt3y5En6SWc2yZvhZLWpFFJan2TN3jsG6MzG3y",
  "key25": "2GZPd1TN643ENELCN87k2mCLvAoMaUe8pK1iJPhNkUtZkXQaaphftb5wWaJwhQDJF2c1UtdH2PTu9KJLXiMa5EZQ",
  "key26": "3pxbYA5vkV6SK6JjSzqx5jjXzkLZQ2F7TtfX9qqMMZkDwFS2we4ZtobjVybMX4RaXfiP5TmqdsmHGHswTSxoWEUJ",
  "key27": "4pPc8Nm39AGFmMKd4dQWGZXVrSvcfgCb8zw9HXQqrSoaADYaKGPB5sr26R4HLZkLwNV5cwb6MhDT8byY3Wk7Kw71",
  "key28": "XSb9KTm95q8dLHSbWdMeKkpyCCj6igt2nSv7yq8boMxDL7TKvrExcbMedfuNfM91fgZRu2bXbpMqucyB4mkv5Ce",
  "key29": "5qRQJPn9h5gT2qUh5N5qB6Bv4UkVbbvbt8XTfgxp2W88SVWRV8fwTmmsrrorPGKcrP697wsWHitKVGUEsEJRKeXR",
  "key30": "3eUZdFjt1paP9eff37niCNd6p5FWyRePrCen2pbMLdWeN8kSkJY2uMxEZ1EDS5ansFrCn25kgTR4BPzVK6XFrigY",
  "key31": "4g8PEfcYzRNhy5EijYDYCMfwqmDaxVKLD5Suau7HovwCKBrnMbKEZLMtTNPo4ryd5AAtwbjztEb25zsrrDYVpqrK",
  "key32": "5qYrD3Pf9mpxvk8EZdpza3zkg1kM4B76VbhFtJBVEJy7t9TPLCu4FCyafJPBy6uvMACSHZiA21gjNKPrEQqLSCtS",
  "key33": "5Sq3NtWRBpk85JT3V2dsXTxWzPLk2XAYMepeYWM7jckU5w39sqgx9We5RYXAFnpNWtu792GSEJBPVJT63SuqEkEm",
  "key34": "WypKGUrGQcJh4arCUVTWSzVz3TyGn2dZFjeVkN6Beb7baDWPZqx3o9UVVxjyweS9yuyNSdmNk7a4D3asQfN4gnu",
  "key35": "5qsJ1LSMMMHxVQhznVWicbsvZ8aXWGx4tfjqHW4GsuHui3nHwi7Ci6xKgLyVtBJNED3FkUbQQWTyzR4eASGG4SQy",
  "key36": "3ZQ6NnrDgHfqqcVh6GTDL85WBRecoE88Wx7DtRAQicRySGaRownshDZoD9ygfd2arnNx39oaC9iYjyWTGoWo4Lgn",
  "key37": "GkX6j3VQt3THC9nhd2RzLdp9xeV89jjgTSbtoKgBFuEJgWSEuufBYHvSNx1VSxpzX59sRpi5VssH2XqoN2sZJ3A",
  "key38": "45aYu9QVLFkxAUQKVk4PFpBBhrHPmMVZ8yJbC3aaahMhYvgU4JLA8ra4Wu4wep19LZbHTtDopyhx3AeuXepVb8iy",
  "key39": "4JXEhbN8XEgQJ3w9PdJJJL86duAP6mvUqXYJLyY3W4vMYbjmh2dRm9qvzTYGERug23a3ERFmxLuGESxvNHRmS5rh",
  "key40": "kqkHVKXkZuBzbpy5dhTwPykSCAWq6vk3d3p1sPAAi6pWmiANku2fdu42LuNEivRfhY1FsYR5ir59DSWS4EsgKuQ",
  "key41": "2rTfyr1LXkR3s4ihgRHcB3ePXCtCAqU7shfHJLEyCR5rCVtLUVnYY3Ke2YuSjZtV2eQFALQW3U4NNLkyBVjLAAFw",
  "key42": "5X6EmSmqY4gS8PREiqiYGeWyxyALg67vo9YD5gtmXLFYXetAvWEw98aHzh6McagVTwBMmDzd7UkSKpUn1Et9Wvty",
  "key43": "5dnSMLCmufJ6zorxf6BXNAxZLvYDGVzevmhbxAarxvwk5PJAKBvAMKYw5TzpbYuc4fR9g2SdMCTz1BLv9UayA3vW",
  "key44": "5xWGp5AcjvFYqeMSrNhmrYkCHtQseKY6wvmdpmgp11UtSuadch6vaHp4fjgZPPbL1bFTe7ARtaUZx4CVrJJh48d"
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
