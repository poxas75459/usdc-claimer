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
    "4BDFoRaR9CCDdoyBpC8Wiee87tf99sMtcAYRhszBEGTqjgugoDGk3bGNhGMSs1JroBnREhdLLk8UdeNJWieiU2Ao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UmZFLBWisE1vQju6ixpy3uCQJ3cdZJka2TWgTcYv1UZ5AgqWQtUe7uG1MBFwLEUH9QJBsBZVXZSA619qEcJyLne",
  "key1": "25JjzwnpVbw7NdSXbxCxnNKYSZ6dT1aSKRLxcFZMtZrzGT5e4eq6k57XRLtsP65cup4EfbdJ1F1LLbqCyZm8UCaK",
  "key2": "4afmTHpY9HRGHWLtQnhr7z9UbkZyV3rKr6cGVeqyqK3LEXuxPcPnzdP5v6jAh3sgaFYm9otzbYpRXqtc8weHPjta",
  "key3": "3f1o1hqzZitMRF3dXu3gv73qHmurXBJeUHpHFGcqK33E8rVYrUAPQ4UM52bxobp4S7S5BDej9HUWsXayukdHxRGK",
  "key4": "2FnV53V4GkRbs4cUTK6mvCsjoow6E1ed15QkiwoGcgfHj1dRhzzttmNEkDKk3syMRLorni2n9Rr7pKj7cVYGwgpF",
  "key5": "4SAogkKefTKMHPpcrZ2aP3VnMX6NGjNbyTXThSLAxydgn5aGGNLUidAR5Bpq2Q6QjqVyqTpavTA23d456YVsaPcg",
  "key6": "4MNiE9g7otTjAuwN7GfJsV4BebL2Rm6GhmMLe6WUyfQbqVjQCdiwrUf4nAVda5LEw6AMKLaU23TCxakaQMK6SQPh",
  "key7": "5qFpyjYxjEGW4SSbEHWp1Q8SxT5v5KXV6gFohBgvXALjUgqCzEk4fpXnnyVFiEmasfvU7uYsLwciFuJWS1oGEaHZ",
  "key8": "D4TVHRGjnWvumPeSUg4vZtDcCCgUMhyGnVLvmDXf37uP8BEzGB8nMC4aDgdt6gK7ZRsj7U12qkfRmtk92WjZ8dZ",
  "key9": "2A2YbosHp2CkDiaMVDePhtcpAzGELoDuiMh2DHojmtKLJEimqnPUgc8ZQdNpwALj3SrgSrBkhVTySZDg3yGqzoeu",
  "key10": "22X8QigWRo73jgLufGK3WDLAvRqabY6WoUUfqQ1zHxzpi452aKC2vayA85VsPDDeayxVBdQs8ncBZNvKMp3QVay4",
  "key11": "5qERgJYS81rgw4bmNf3LBJXVFgAysb1nq16PZ8JiHGMjWVpBvbZhWn8TGAMTeUJZg2okDtWep1g3xhBQFkXde5Xp",
  "key12": "48TH1mPHYYwtLg7GFepx2AWkMFu6rk61tGoWDGSw9RVHbHnZynhzSvykn9R5p4qBZHgUfUGq65g2NyuQDDUs5Vpo",
  "key13": "2sQABHT7ZNRgjLiXjoyCGJU5J5qkuhPuXKVEibypHvtTVwPEYG6jBuNb761kz4KqUWJRMm4XpWwVJgGdRkinfFj1",
  "key14": "pvEn1mSUkQ3Cu7uWZBo5ziorqbWaBqk6iyskMCPN3rpUmmZqQZ2fVmjpaiqa4WFbPzBuFEPyrdwgefeReRmATs5",
  "key15": "364NQxPj6PcUiZUhyeWeBm5BHdB4GV2fAz6u8YfzJVpyKXJEzx88YkeGRBXMUBfoNS5KqDmZdTjpicUVQNmc3bqf",
  "key16": "5Mza3wMTQTuaywx3DarPBsPjaFztUMNVhE5dj2PDB6MBLYEhUvweysajBSmJszA6YAhcqda9JNSkpjrJTYiYdp3v",
  "key17": "3fe7oZPaaCThtXPri78MHTSKTsUkJxi4GzsCKtK6CFWHJXiLMHsZ21ff8FC4iHyUEFjWERZahjdoUhdMMFiybmry",
  "key18": "avEinGEDdwZ1qrVsbsqg2zdE9KHqodaPdFiVzu3VyRCpiopH8qHTjAPJdyWmyCHDmKPUNgR5PBH8F3r5YYTPkFF",
  "key19": "43NqypKR8XXSgsfRYRYewA6VmdKwQ8teh3oTnxEgArcneLszfzfaTnahUvukQ4buhb241zHCW14K4ULPiEtWL6E7",
  "key20": "4RvcRHnVN9dipNVJxfhFZdaiuyDRP3koz3ajNWEEagCbzzJBk7RRXKf1AbqGTEWM5aJjY32fh3H7RJMYFmP7tdkw",
  "key21": "4asRejLzXvR1yvETrQbTrU5AgyHtLr7VRJFzoDh6yAkf7pfjZmy9gwrU4j7s3fEoLkbdWHsXjrvQ6wJSVGNW7wjp",
  "key22": "pARch7MXkSm1kJjeaggo9mmzzvtCNRnXZjR8Wk7cC7zBRvM3SVNEJMoHV6FKwWzSsAA3hjTZkkpoSptYK77SELH",
  "key23": "3byfgBSfgKLASjL1orZw4jGUMN8yW6jSBmcjSJXZaPTkfRwzvXZsmzRnf4LgJaxcuPWWPx7GtXaqn5TbwqLvcCKZ",
  "key24": "3NNUeHa6W1kh3KZXxJVFeDriQYYSS7o5Vv1z2rog22FaVtFR9zed24o2jB19eMANaFaHbuaqmhf7SLC5ta74AFT9",
  "key25": "2AuxrghR2SNknFo9AeJcsr7wxEMqDfvpfcsXdsB9JwUqQrs6D7X2NAFYjd8QJwDLEzGtTd3dQN4DXuFhWi46Ugz1",
  "key26": "r7eVbbtVRLaoh4S1VnMgXpsdQX42JD8M9TzRH7t1mtx2gLT2QKM9ugETFZDRKpREDNMo1CaqDn28KMBVhozqqZu",
  "key27": "2ZpCcZPvTxgEtC2uRctvsaZCvz8iMVVeSyNd1Fz1MhDUNb8jqm7Lnm6BEt4TicHHhAym64h8hwMNmb2XKNpsfPGt",
  "key28": "JxxBfgoBX6DdkXDkuVo34jcjdq3rsZS4uT6smg2UYXDrP6aC88S2uza3w89pNpUC9dzTxpbnXfCKNEgjhTDVZun",
  "key29": "3GCPummR2ce29FqH35cKP6j84AXNoc93zFvV3AmifbgDPQ2HjEeL7fhCRz43hBKmWUp9GS3Z4SV6DMRzttPfFGos",
  "key30": "5HyPqfL5VZaU1UPbvRHWKWNpb83AjzhWtEx1gBP4AwmeCb726tTwxPPR9DZu6g9NumRcSCekhBuLj9GQgD1jaxi9",
  "key31": "2N5DDYX2sZigqPjDWK2KyCJgB3ytAj31dkW5nARQBskZUQaxkp5CzQnrmGFnR39aCU3uCiJSnM5TZkoRzdaZczPV",
  "key32": "MbxzhPk9xcr1pAbuE5sPK1E7m5qkWjKa8Ak7ck4xKrk8MRUBU2QPcZ79TuRAsdhSfqRf6TgyRr3WdguyMeXwRKa",
  "key33": "2mU7TXJwdktnFFR28LxaCWLxe34icy2jHsCmW9uDF6UDmQ5kEHYBtuwJjuGjGU9VWm6SAeXGHKn34Fs6LUGkYSZK",
  "key34": "3jSpMBNvQEfmibrUVym2xRgcMrMnxf51mwrJKMDuq6VPaRo9xd9S11e8yEkjaqCG6stXvguB6KqEU7YLEkHdFFkR",
  "key35": "QReErkMPKc5h6a3eZGmbJVFPdAPhL45PuYUVU5Mes38HkdYcC1KpXhY1ZW4zqqrnZHAeG3SzdPzN6xNAukGpa2F",
  "key36": "3XB27j2g23Uq4XAZbrmYe8WjqPg4j2KVEn3QTmBuKCeTbeLc5YUHrnehDuULTYgb4iqwVqdbpfQ5jhg9CR5KkkxH",
  "key37": "4YxaMod7azz8eWiEdHyu9RZdcVSHJGmLM6Z9UCM5Gex2PfyCAyb2EpQTZmrE3oS3d7aR5uiMCuzozNX6AKaFkj4n",
  "key38": "TGfBHJqgQhpQDT8z4QXJKpodkNeyW2HxqDDy88cFPddPNTVXjvTeJheZyqdYY7mQq8Bv4MuiaQfWiDWb9Q8rXMx",
  "key39": "4qrw4xG281DTNfNRb5RSYLJAmttzhGHiq8UcbbSwtHEu6ptuFDTEBHD9weu4swMbPFGSiUTJj6jVyThr56dYmy9b",
  "key40": "4732EGE6Vq9Z7pgY2xJBbaDfrdq21E4NP13xABx2ZDK1SztUa5WZ77DDR1BJko6M1L5cK1WeYRjNq51bDj8QwAHR",
  "key41": "E3zTkKtbWNPoBweZkM4BaCZmKZiscGooj2vp8cLKiRjfQdpcPaTojLYWMkqXpAeddnjjbTFLh76VywXxTXVh1qX",
  "key42": "3qCybAQL19p7JUhxPQ34kKGXKUcJFASmfMK2G72mmxhKz6JFfUSUN3WoFwFZL9ZHfkUTbXKs5JnUznnhMKH6Qb29",
  "key43": "4D7qsoySYRwZMpDojuhAHp6B5CiEUasvsroFWdG7ffCP8byvuZ11P4HDLSdA6EyM1rUtosGFoGFMeYcTd7SAbcsn"
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
