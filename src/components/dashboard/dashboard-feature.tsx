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
    "dAuki7mNYQwouB5UAJ2Ebqe5DDFyRVkfu1QgwJoCxjMFYMTgVvHswopQqBAQ3vDrcbpgfg9XkJRq7yC5PPix2mf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UknAb646TPm9bzy6ozsupvxUpk1sKMtD6MaGdjQrFURiVE3zuXMRywpj3WibwhRMWzm86VCNgahT2SFYtunKPvM",
  "key1": "3cY9KjrZ6LA7LatvK22MzfWnd4hPevaD7UTYVzVirMqbUZwSsd8NbrGxzJmdqaD9DukoGVM1kNEyzcfrWip6UFRx",
  "key2": "35Y6sQuNXr3XXyiBMjjGkvU9TzVMVf8ikf9qJQ7Ye9VJ5fKtTFJaTvhnPBWq9Q3pdWkKmyRhGGniTSoz47nTjE6u",
  "key3": "VmiQh8Y3R3KpjEsDv2ff4Wj3midZuWVTGKc8dEZaevCBrcS6TTeR1ySqynF2BZZVhXogpkV9Wj7oLbDah9pnVLs",
  "key4": "3VNT2pPEdCvZ7JKtiTASQTpkyWTg4JzgCdcgZLyrVAP6SNn1h63hoCdAxnP5u4LimFL6sEjxpyR9d9WazLynCxxh",
  "key5": "2XD9KvbGXocjmt2U4ZW22PCyBUtdD3HSjCHYYhrbtxtgZxX2oF7CMBjZAJe9SL4gwM3evzwseTcCoEp45AvDoYja",
  "key6": "ezb4WnCQAjCVg89yszk4Q7DoytWzZTet2dS5eWxV3jjnf26pCjwLBB6UaEp58eEPRwSbmpvgiA976SErS3F8SuX",
  "key7": "5uVrLPMrKCHc3oscXFZ5sVAGkUc7BJhsJRv3r7T1ixrcBvBXTwsdjeEShxSxEcCBifCVMB9GDn6v7BcqDZzyTjop",
  "key8": "NkeuqGy3KSFPtokbKEaRnvQjm97pZESz7vWBM4XYyc73RhKFocsAvdiotq7qC8u2kbj9cK6HZ7xuZqaRLuHvvEs",
  "key9": "5GebSx8oipUYFiAyeNTLHmvdYZqwCSYiAssFzyaN8fWMJVPJpem2EHDGaNkjX7ex2u6CtkdWrtpFEkkcjWm1hr8N",
  "key10": "3QbBF6fb3bJLjF6c44pM3s75MxmuZDebvoJLZBk5eJBt7dmAG6WcsG8fnumrubTFHkytMsw1aoYoXVnoyNPscotJ",
  "key11": "2UmmeRKkxEtfT7RH9qWv9i7AYGDkvrsU6SdhHmJ8HkbXM2W3Y2K8eqFDfstfziNbwi65BDYA135VeX1PgDSx5iox",
  "key12": "3BaMSs5EVRg9DHZLWMCjm8hm5aCyMBPiDRRhJATAusuYMQvuQoQuPtQeZvioFxCn2o5pU75DYL9uT4uJhWWtiGLx",
  "key13": "22CTBBrNXhoXJtuX8GYQ1jZS1ftRXhdSvaMQVgHwsn4Z8XAiUsRUn2jAoxQjdY8SHMSkghtT8sJ7BqMc3Nis89pC",
  "key14": "4iaZjN94KQiZDnfAH1sP336B7bT5fwcTyZKrWSnYzCF4dXDu4tAqgVCjdPbccaw2r116nmzkVu1CFSt5dRHFgR4n",
  "key15": "4fBPoWjj7yVxRhanjSoeGhKdP4KtBfeLrKv3LtqFrv1LisVK39HDtqZdvaXS2fghi4bz7sqL2iGj3SeGTqFhmGoZ",
  "key16": "4xqTZgFo5y1rVtEAJRv8JfzLho5cghwJs4skmhBBoUaKakVri48M424LXDEkKYHaswcg9C638MvuyABtQXsuAhfP",
  "key17": "42CUxuuEb6tRM62V7ZEkt5hrqa82dooXk1yXPF7wVjf26onC5iUA1jCNBa4HfuCPC3Dp3uoecSXvWa4eUY1TbHpZ",
  "key18": "yZ8edb92TvsoYBKaJbgJYJC3y5fJp6H8L3MAC7DsF8jd9GbzGP6pA1dJYnGscTp6k9os6bb3cYhNfp9DzHYd8eF",
  "key19": "4Y599dmY7297f8AWJytjCM36wrQdsvUKnt6VbK4J1jU8QBX9hYTnXNaotjMrBkdEupvdHDh5HWzMSWxvuxa5ie6d",
  "key20": "2Nz9AFaFSoM7zbXpptagqyrZCpU7uf8fKkMaCjN4aBXpBhpFA3Prhq8dzPr6vKstAZbQQvHkRSdKm9ZonDPXgvR5",
  "key21": "3uq3eLM32vadzbECiLHha8zv7cWgyp2Lofz3XgCCgd5BrF6beJm4bQR8Xth2QDdKLB2a4oQZJspFuaeVjDRymzBs",
  "key22": "5bb6xYSPbqPzzCbfBAeFi2JKmx6jEcY1gPmWXNAzbE5jbcuD5oPPPQmbxapGJuP9TwA49HoJFsjXfswA2YY8NJu5",
  "key23": "3gNvVkBeMN2LtpvNRSJF2ZYfqXoEve8xYsNFihFTfQEWCr7XU6Cm1qMA4i8zc31tE8gJQb5moMhYBRfxLQN1WW9i",
  "key24": "3RcW51W3ke9iVVkr87ECyWYUQcCpKfywV7uLD1f6cJrkxeSccR7DFVHcgSNcYzFVfPRKFfrGzh9KN4A4u2cpAPeu",
  "key25": "4Z5SypYUJcRNrycDMD8ZsAMeKPy6pZJhDdrrFYbBvuquXqKLeB2EEi72UQUGUZttVZuZ726ucMQUiKLWGTPFKamS",
  "key26": "4Tj6ifvi83Z7xVQypnmYN4zGK98MvjWWorqenc8NMdFrSHGm5Dwxr1t33GfDo8MSkbFccv98RfeHcN8Vv2faHMUi",
  "key27": "HphvJeDVBb3p6xS96wkgrLWwdD3YenakP74ZQ4n3rfDCAMSKAASbtaELjdEafWq2zagHXHZUumMfKa5Kib2MRYz",
  "key28": "4DijxTri431PLHatrGhZphJ1itapYJxTZ9W5ZUMwGAfeK6nMceDAZYAngm379pMxqemrUfaAPr758n2dGYLF7A68",
  "key29": "4zgJHwEBZX44mMHNc5prt3qyowtsr3otY8oxWrDEEHyhr6wHQge5nBjLgq3W29gBQowUYiDuYhH8JVK3D5m9RXhA",
  "key30": "4biPKtZRJGzAakhjocst2SEHVKrTPFhkJQA7mJ6p5E335veeLGntjhTHL9HbW8gqKFEdWJLqHyRPwpCTmxPdwFZ",
  "key31": "3DUBSTDeLU9tZfLkZHWVgav2TbpNXyZPoetcHcNujWoMUqevjnbBTXA5UY9SEsU7k7G9zbjBbKT6q4DUVjAojUTJ",
  "key32": "5WPgPdqbxvbyYuoiruNBn5ZEsK8XBq33bhcGmXGh5A4a94zDCMUp28g3bTvJ9mQHCxcPGaLjjJrPLodhrREDxjRH",
  "key33": "1DbqAXcqfFcyVFjLdpGCkH9Jc8JThMPx6VUsMsJyTRnD6Du4rXnnV9ay4YpZxXC9RfhX9Phh4kzuDHGg3NofNZV",
  "key34": "5mwsTKh88Es6d4vSkYQ64zKUCF6HHgVWtozVtwEjtW1c6acNGMeLcYntgmFELNgyjS7dfHhjPEr7JWMmET2eFzoD",
  "key35": "xsLJyxn8S2hX6Mi9ZmyXrP8UBdsZj3cZg72HsQs6Zcaa3FvNSUyvTWB3psWJyPecUDicGkDU8p1omhLaDeoQeBZ",
  "key36": "5LvpkxfkqTHnWA95L745TiSf9UoLhjUHpzU6Kvpe833W7DoQ7hSLUKJC8DNbMsEMQ698jz4cXGDRh6NP2dX3xJW9",
  "key37": "3C5cL8PiiMckYkCddYAwHV3dYKLsEH5rnctuswTs9kcBJ5jBcZDWJ7QSjEvPCsWmaUvP8CFtmDA8eHct3ZYJo4zP",
  "key38": "qXiYhAcv75A1m8SJyNb6eRe3cwSFBzzj4XP6xJu8aCbkCemwxRzMFBxWapaS8v1EGE7rWRGLrodTW3Cmo1ftSzf",
  "key39": "2jTdZf6TD5miHTAsPTjR4JhqhPW3SDnLfmCkrfbxbBbnfma71TsMDtSjRuRrtzFr1k6TzSS14UZhDv5e6fYnfX1L",
  "key40": "wtByWpwSX2G4Mig2aUiEi1XFoP5Rb2L2Bz3vHAf1cuTPtnPUbgg34du8FqHFSwV54fZab6htt5whZu7thz8JMhd",
  "key41": "3iL9ncxbTnU9MuP6RBnh2d79juwmyXFejDKhD8SN1V4xPd3WuysjbSvCiogEoBn4BPwNipn1KaFsAXPWSKSwVqhu",
  "key42": "66yo7L8T2xTpRwPzjitPwQT3YSaUoVHCicodhJiNnPr3pTnMabQ3agQj1zHEMqxaXKWvccEUd2m9Jfw4ESxAwb5N",
  "key43": "Y9rU6bnPVwae7eMYg1hdMicqrihMb17ootfpXcTuo2HrZeSEDniJ1RgFmrHrARKiQJWy6Et5X3t84b2AzR471rQ",
  "key44": "5kYQrzNcFTNDtgnbPh9H6WeaX3hcWSoeAMPvQZdApv7KmXmaEcvauWumUbnNkd6EktZk84zQyzGuLKaQdTUFedr8",
  "key45": "2SsnjxQkEsPT6a8e4Z6p15z2Vegg3Ww6rtkdY4ebWQQaE677qiMeUo8uYw59WxM8WsqB3upXkPc8ge6QZaKRoCKX"
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
