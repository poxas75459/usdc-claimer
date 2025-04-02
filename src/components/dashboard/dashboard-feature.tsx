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
    "4uRckn6tyUtPBuqnf6c1mNC4ZDZFDq5uBhnXS6AZV7wW1b1GHwtzWV1CSK3ivP854Jfy7wfYj9ts5i4W1woMi6yx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e29q9Rs1dGib5UKsofrLJJfjKGYSdRiFQrJ27r2dsSZEoFBb83x9NsW1F2cr2TSiWoi6acTfPTy2WtcYp862wFC",
  "key1": "BdNZdwXyUxVTj9xZ997miH96Dr7CDF1pyRtwb5ns5TFZViAtUxdymnbYRKQRn8h2CfVcGJkA3zLsWk54ttgNTxr",
  "key2": "5jbPmfXv9rooJQKr3tD1EPRsDrt5MDErxVwpDKqLuy8dwdKygppDECboeYShzBv3Hp1sPhMD4PWijiZotuUaAazp",
  "key3": "2LtgPGXUZC63R7ab1wwXvk53zHRUbSnByL9yjNKodbsBDumQoiqiABfMFjMuhufEJPXK49xvbnpPbZqkY3iHPePV",
  "key4": "3VcZEmkQc574Kd3EEMTQhHDRvCxT3d4k31JaqCc6rYJzLJvVz6PskQnDy6921W5FdVPtjnJVnL4JvriDrWGhANCS",
  "key5": "2jyEmea2ffLgCAERgw6atBQfRX26aTkjWy5A7ehPkf6Mcu1u5trQMcuMDfHmp8FjH22YnypwSeMrxft7muPYPazC",
  "key6": "3NyBQsBq4KV8UetZq9KkEdVjtV72hQ25f6YHTyVPRyfgEuXghMwd8QmcrwEwKDzbwBknowptcovv1Udhwc6o5vxK",
  "key7": "nzwzy6qhjwi2iRQMVPAxsPKsErC6QFapRbrNxQ41vZNa5WecfJBjMGNZ6LH8P5HfHUK8mdGgKSZhudULYKZGgtL",
  "key8": "5FKBtgeYvnxr7qFTYCSqyFxfp4Qy9FtruJ1xYawvCuiYK1AGZ5izdr2dnyHANbSLxq1HC75fgnbV2zf48ZjMjCFT",
  "key9": "62BeL2ewXMdWKMHZgzYYe4Zmaq6LzqoNA4HUb5Xae9RHeevkK5TboRibnJpHekV8tr81SBrPYoaMxvA1PMJJKaxh",
  "key10": "2HNff3T8G7co954QwvmLgCpAMECf7WqECxtRbGfrs2jGNEmNEUjXYqHDBBUW75qV9JTEJ1JDovRox9YxhQ1AgE6B",
  "key11": "5bqcw6gyyiH9HnMJkVR1m5WLe9Bg9ciSbcR6zVxGanVS57VRGFBHrK5N9FBv7qciaTTskRsYdFeaKuwfSY6jcmZk",
  "key12": "61HpaofrRy9jkSQEozLFSMTLq15mDp6ZeHBYQ87hcBxHogf18bsqGx8dRZB9v3s7HKRE4NG8bGgdX7w8vfGGvyeA",
  "key13": "66vQgP2q2UpupqfUKojBLzAUf7aWp4ct1kLFmBCzqgj8caW7jKMQsLfzXRkbhuFQEjY9oc6y4B6VFy5Xmqgc12LY",
  "key14": "mP2veXwvKxoLG274piHdwCggckEGrawa1pLcygnHuBC8pAAD3Sz3mjcpX598V8hmZaVDrCeYP9Wb8qyG8N1kDf9",
  "key15": "3MHww5B5uzJtzSAmEpUzmBXTdnZkHTrvZ8vqwRh3hktwLXoQkfDfLKfwBXwK4WS7bNVe153NWKBdgPS9MS4a9QHY",
  "key16": "2kBgr3wdCF9iQGEGp4aD7cvdd3qZCaK1AzwgWKLFGFdzWMEyedZV6hwytdaDmBVJTCzFWK5xDVpqxFCM8nYrDL57",
  "key17": "43F1pCHn53YgxkpWAakH2NBa1E1ufhQ36tptxSLCk91F9SXz5dNdxJvJudPKSAHG4BRCaUH6MLmte3Ww8cdyy4Y",
  "key18": "62hee3TnsWHKuF2QDH7AgQt3ktGhmZVVTMLtWAF6Xnrc4NqqxHs79AejkR2pjJiaR9LBDRseYcAdKeMpbiUazfN2",
  "key19": "2Ye6ZAx1K4avFX7BFr48eXrnW1THRfrovvm3rpiydyvnWCuLQhgSRpwB13dUCShHL3r6kRw667616Naj5oxVwS5B",
  "key20": "4JyMG69qT1U7zFQSovJodtPNAbr2hxTGtZrthXysNB3Xp78juFeZzoM4xrbKbgZaCnaQawHZUYKrUcKPsmftDxRP",
  "key21": "4PWhfB3co8SHtrrJjWV4GdMFEuHdTcck2FtDokWT3V6ris7ZL2H3FYaxmPqzJssKrrcHzJRufhzWpgYycs2VpQBJ",
  "key22": "4gp5J9wF3bWvDLfxuGZ6wXaNSqn43PYtJ11XviiByjByVGV5JnPQJLX8AphpJrjM9VHRYBM7Yb7ekxRgQaATCgy5",
  "key23": "451qEGAFHx5CADmMuEiMh8uqBbro41Edf1c5Tet5CoPkxitYFEZVvbQho8XryakkrfssL85LUmdY4f4EsGTyXriZ",
  "key24": "4aUCoB2Gwpthw1GsEfkrdCxvsM95Q4tPxh361tcgeXTYo4ZpdoHkZkqDFwn4eZ8NCkUSs27AEXJN1wqAeKRRsegU",
  "key25": "3121R6jWkLcEJH4f6jxopzPVHHtaq1mFxjhpqTFgJEV3KWsLHJ22URKabM3VuXyP2HnEjZ5Q87js7Q9c12fczEEx",
  "key26": "4spggPiyB4KDjpedri3kvKsEEJvS1HXCGnWiYUEJPpA9sXxceMkCfL3YDdsGyQfgPKVmT9CFWotJi3CN2qS5p4m",
  "key27": "36n42UroNWXhnGtAzXbS1v3ohCBbcb3sKc8JzLimrAbhfbMuNPaENCQYNYGzjM98GsVoto3xw5rwR9Lnat1ZGKom",
  "key28": "31QJBT9WxHqhaPwtskHwTF56LQ6BDiJHPZaaQ7JRXMtEaQCJZSwy3SUyZk3XGk9HGA242RX65ShpX6mjo557J2HB",
  "key29": "3PAg3gBqzNJDqmyuyeu57WzgykAuatgpvqqDi5b7eEJxazRfVa3WsCbwbxkn4GPKdfv6YXNmg8b4UWUTHmupZDis",
  "key30": "sRoTtckMKdVxFVr7tP4J8rP8mEsauhzjzGD2h5F14JKpVmpwfbTbzrii5vmca7wLsiFpdg4cKmoLASWo2WLub1w",
  "key31": "3ndDHx9mLdYfBhseRiZU9tubwzf1Tk5uTgkmLeUH1twXdV52Vtf9LJUxn8iCVKW9TGYAwgaJyJrfMRME3MJkgqRa",
  "key32": "2ih6nbBnAmdesHufkbnb1MQDkUDmErdbP5RJsBBwd4zkFfnr7XwaQwSdhuPYTs6c6Sc1vFryfijnzDEa2LNm9yF6",
  "key33": "frGrNpjzZ53o8MTVja6CH2HB1uNxBJeBWfbdfaAbbMtcb22w8oMakHvzK7JuYihGVKC4oXjBNsPkqG9CCX7kJt8",
  "key34": "62aFS9a1k6D8B8Wu49jio919wApW3ceE6ef2774M7dt2ZwfTKE4H6VbBjApMXUHvRLSRJ9Vb1rkmXCtGtEotmh4H",
  "key35": "2g1rr3N8XfLhPnnKxYhgVJvVkSEZbvepiAjRxYa46XhH6hdzuSXbibTo9q1iXhfgkfo3aAojjLGiQNTZFY9y2Aon"
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
