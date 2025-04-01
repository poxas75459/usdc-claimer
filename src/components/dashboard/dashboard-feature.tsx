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
    "2q6ahkRSKRNbyE4PEoiU4yFmWmE3oHFVQudMyamyCDVKyE8rp2ik6prxPw8DW3FqnebnopuYywRsTEv7xYhJPWJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GJt4gZ1wG2z3TsbWngK8CZWQARPRT1gmvMSM4CpnAF2T2ERQ8qP8fT5Eo8y2oShBscrzaVMa7kjocKfiN9CfSXe",
  "key1": "2e6mjQe4krcN1PLe2Bf43neuct5jFf8JK1j4sRtqKo1V6Qrq3ewBYJ8vTrEPcFerVG5L2o7H9ujjoWEBUJ7teGZN",
  "key2": "67fB1A7jjaYEiQTLT52HQoTKa6QiK1LiDyQjrCSEQmGCPdFm2c7u2iwAcUJfiUSqwgqLiuq4R1Z3KHoJsSVF7Y1K",
  "key3": "3uTAyb5sLzaBLm6379Dz1Pw5Vk5DZkYQwB1nZSQRAPv5jauuBzgCHGyXzttrm1De6nuqxH758H6NQ2dkA3TEHHyw",
  "key4": "WfSX4yUYc3obG2S7JKYiN3tgpat7Vrfz5jbh69n6nmB6oJ7QZZ2vZKtjmAZ6md2EJ3w3wxYT5EU88tmQyaNGVRi",
  "key5": "4sLNKTjybdtA9bEbmpBqhTenH26EStaC98MyZGqyP1K3c5JcE6WkBEPyEgcMDXiWuUtQJsTxpCLjwBncd1NBNj8X",
  "key6": "2Q8skKchdBAMa7MzFJa546i9eSTy4LhhQ5Dm1MSf5mdHs7JKfwwAMrDmbosJ7ZsrwBfqZa8p4GzG4i3h8zsoEqmH",
  "key7": "kk8RjAP1NwgG84wKQE6tKSi2tgS6tf4iiDDe3NJX6RFoK4hXZ8W82jin8XPhZYJmkom5vRwdf9cQYLD8T3yR2Xp",
  "key8": "4E1ksP69okTEZa5V4f34RZrMZuAqziZJFb53i8S52ZBsdHPQMKbjBjzpTSxEyXocyDxEH92AWhhNo3RLG5tVtWt4",
  "key9": "3DtZMxJNYUEC3kPH1YejDtgDgLTZjhoi2LLXxxQ7xZtT4FftP2tPRX3Y4PDXU48QXFvWNvT3cjwLFJfrpsNB4yuZ",
  "key10": "3wmadAHMbmMA7LQqmP8Tq7zNPLuGkJGUe5gtNAYbp4RuvY7g54Mey9SNTnLP3XGAr2kPuhHbCLXZoFjS444DXD75",
  "key11": "4aAxoxut5HrS1vdD6TBoJN2MXYs2CgM27am8bdw7QWnVZ1XiTKWAX5FGfVaoSNk5dTw2BfnPqxtFvTiHbdWwveyp",
  "key12": "9W3dFnhBc3yUTypDQTrK8TbnzoeZDtz1iMDJy2KmcEjyxqJUaa7Wg9KLZwT6NFjHowSzrqeq8wappu5LsHezUmd",
  "key13": "3uaReeLdqPS3ui3Pv8S3N4ZqsnvYLPn8qzNw2ycPeTJgtryPMoqshwqfFhcQqcjEXvLf5WtG5PSqGhhbULras2RY",
  "key14": "35MGpLLv9dxGfyXmDNrRCoQWS74uqsPUoB6GnnPjUjnKhfsLhXgseAVEiSGYDcazh5sBVPQSZ1ibBnmYDyUDTqBx",
  "key15": "4Jj39a1FTJjcNHv4YQN3HAfMhBPJDKGeeYAraJQSMYgehQQc46S4TX32iTXTcjYJSuvgp9rsT5S7KYXCHaPb1CyY",
  "key16": "fkN2nbMRTnRy4v4TwNugpiR17ZLLBNZAaALQAf78TFkDSwjUKpeRmSGKoPRn2HtgxdV8YpAfYxtfsCHN1HRD5Gw",
  "key17": "285CKGx4mngwK4cDmrguBLJCWC7SnmkpkBrUeU2BKdFpHb9bFytFWeZ4Pr6Neqip332pEcRnjxFt9SCRhYFGzUHp",
  "key18": "2AwThT38KV8WKvtvMjvKj6mTsiActPfbSvnGCykhheSBEFaaM6f1JSZyverkQAn1yXmmobdUTAwqJZhJz3t5coFv",
  "key19": "KCZfRpnq5R1ZV7N1JJ8tJeEpiVsWRYGa3nyVsW5LHEhkQ27r98VLX8hisdRnzs31c2hguochr8mTHKWCs6eeGTm",
  "key20": "5g42LcNRNHBp5UbBYLhvv4FyBmPGvBMATm7zeMqLrxFK1JbzLw3QS42oJVMiCGSMJ5ArELnV2gfrJ9gLrmxJUK58",
  "key21": "UnwVYndDxsLKj6oNoYBJ51BfdFazWcvACbj6aiBT98wvBo23A8ijXhj7v4unzTU52WB6bJbeFPxt75RGP2F3TRe",
  "key22": "seg8hmuGWFUPVRQQYygUxZqBhCtJ1GvYqSoGua7pgYAJ8hrfm1omfHCRBSVUPpM6gq4YohbXZZZ83p4NSsoyTga",
  "key23": "2K7EU3Y74xhLsoRKMXMT1aquQ7L1uR7wy7tn9otinaRochdMoiKBgLK72rBMnDwSET1NmDym3paQB4rfo7yGqNKb",
  "key24": "4Eq85GzhqNn864J6geUsEWPzUH8LoKaWonDsc3LUuJgyrtJRkZZfZee77gmyBpqZWRwpAHAwziDS9jBtqgcg62J5",
  "key25": "G78qHwQFDYkMDKBLQhFuBHw6X2AEG7qVDhPANmsb2aoTtf4yqQRrzpRFD58cZsS4xu3vuJkS8cyeVRg6dxxgReP",
  "key26": "32fuLkWXxQwLFmswtrvSAaKZNV5TghGMbQkig7bPQqszdCL8LcGNpVnHDmoXeVijTqGkQAvwJeAXnnd8rycbVCBX",
  "key27": "2K2WMGq7iveThTYdYRHYbsB5jMqN5jeLs3weYLN1qe14F5CLibF4rFpeXU2hvEkCMUJgFGFrZYvvSFucTm87WFQf",
  "key28": "2BLsAsXTx9cmNWYuutrikR49uFd58jWAeULb77MYBsGbKc8mzW2S3sctM3N5HdW1JbJLUu9FHfvL9zRRXYuQKXAu",
  "key29": "4ZxswWMZaqnWeQAzXr7rmFZSEyHfyQxBngPSnKRtexAPEzaNLMJuwkYqsscyBa1qSYBni1UBdDeCSzER3hGYbkEt",
  "key30": "W98qQeb2paYypxTK5n8kWtJ3uQy7eHQ2mdgmjWMjJ2Td3nFwArqeETEY8g4h3bcrezn3JP1YzMQqzJnyB9jMbdV",
  "key31": "R5VFGB1eP5UtX2myYnDsVXN4gV2DhqsHR2RgEU2cot34sjQ6qKcsGidgnbB45fgzg92cLL6D421mKSdQ11CAJeM",
  "key32": "4n3mqsTjPkxxjGkVqPFEUsdZjGMQ9wotZE3yWPd6gWtyp6uRdc37YZQr5zW6ymjCicCmEjZ7nPaxAFccVxEudZMi",
  "key33": "w5yEfJYdzWiTSRWfZLnTtkmNRCGj2ffQ2cG9Gk8aVX7gn3Udx5iNBrcXh1TgtzGVzDZSCdNoVhT9nX8YXv6RWjv",
  "key34": "4iZj9d5UxUxk4hXxyrje2RuLzr5861Wzwo1AXvoU69fdB1q1pYzyYJeS4mM7JBdy24YyteCoht7yM6YFaN6HVpA",
  "key35": "4mKhvGgo4ba2nTYAi883PK7VT1G1spqeTNynPT7UPKRtYK8xnPnNucj8rjLLCCqFEp74c5VrFsgJi4YZWtUKrMuX",
  "key36": "4ra3XbGy3XBQtdGgirMcVmDx3kWMWzaTvMUrHZSZV62fFrPwVfVk4Hc1gdosEzftB2Zk7Rz82i56R673eNFw5cxJ",
  "key37": "VfFXuzmAiFDF44XpkPfx43die4WP7v5fXPyJSqbYxjDwZtPhDTrcWbkmNMgjBEoEqVKifGDFpDnM68YuKvjBonY",
  "key38": "4Xmfs3q8GX7WCxg8DDVgtB8QiHntaPtrfZPLuEXVFwihdiuFsDvnXHaAvTHL2X1DVFQvwwqm29dhhx9S6YJb1nDF",
  "key39": "3KA8iF5f2qWDX2GmShAheSDUPHR9sMQVZUwEP6pamwtYia8CZpp9ZT8L5s2z8KRZLr3bmR8ECpqaMtssqeTfApCV",
  "key40": "57zy7GVyTP7k6GPrKpW8NRNeQiQiUfq6aLNfxbAcoD8VQ4wtWs4huRWiv3Sikb573TNfEdDXjPWxHjXynW4oz4KU",
  "key41": "4epWsQQaCbdsehBDYmCFDSSb4SLha4apDpvfJgFeTSW7i7ge7votaZNpbNmyJ2DqYFfL2HsW9kp1yA2UHgsVBfxm",
  "key42": "5VVtbHh6gXnNPvPS215J89ppJZFB9idNpBXvNyhFpEX2LL6gCYHzJij6L49vrZVK5ozdWum5HxJtFkRbTmYwsm1X"
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
