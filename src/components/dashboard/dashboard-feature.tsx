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
    "41ufbY926BRSe3YzwzQgx4spi3aUtgt1d1z5SAkAXqcX8xomHvtDTyaN9kxiagPJc4es7mv99vAqTtC3TbTdSoEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tp1m2nQUhzTwByDm2W7oxky51bsqznWgwdJ4KydfZymoVFTeL7eimDL9p6JEMYvs96jgPrCNZhNBMxhKLYZnhcQ",
  "key1": "7Zi66zG426XQw8DBXM4LxZcNKGpnw53quNqthMXTQfWz2TugrUcPkMCKwEdwsfTQ4UUYQamBybMVWSYpa8fEzuu",
  "key2": "5MjJGufhgEEoVm8EZKNpqwmcgg1UZfLTUQZLFX5vkCe6ztitDnR7ZcxHHGAdneD5JELiVucWMWUbY2Hg6e5ywi1U",
  "key3": "4FMYmQoLrgoxUYRoPntABMuwURRaaYaq2Zpabk669o2t9c9qZQGCGE7TvopvzWUaH1ZhGo9Cea6bnoeyraupcQLu",
  "key4": "WPK8eQReEoXzUumLHBrQRkQpv6eep3CL1bjGP7o6QCPZp53wwiB8ZngFjbSzyyEtYj9RMwvfDqbPMeerFu6iH4V",
  "key5": "3S7gMbGSm2xpfbeLEKBANwtbBLtP1NBGctKq16nXZKGuFKEJ5VsiKnRXjxMvwasRwR5UhTF1RBg94dj11eLTH8dL",
  "key6": "5YcZ1LntjDonvBbaZ6kWcRuEpMcxAYpTtwnmA2Q1AedbLdMsPJbAz8zLqn6QHjxB6TeDBMgZNFaxkdtMZifUQRgm",
  "key7": "5BLRRwf66YgqeYogJGrnZUJSmY4NQ78ANixeV3GqgerXPqEPknUiwjk8UEioYZL8p62hM9vSw1H7DbKvQca4tR1F",
  "key8": "2v1j7PMDzoqASeMsFs68hL5ww95FgpJHD8k8epgLYuZoo1hFM6LuCm5LeZFht6rQtCz63nERdV7BmzzCA6tQNxnV",
  "key9": "TaGAw93jzyo1Q8BSkeKaeLFumLg1LxYYYjVfB98z4vs54wieK6cZxVmx1JctkTuyPstXbHGaJdcBts9z8Em7Kor",
  "key10": "Pj5dqLs7hghrTSTGNBMgC9CkH7fkuuv4EHX4YHtfZjMxjeZ8vLPCT3C66gCGqa1QubjReX3buQKSTocaE5LToE8",
  "key11": "21iReDeHc6issmLEcJifVznrzM5iqGGqBUh4PYGxdSEq6k63Q9cg2bgGAL8qAt3pCBEAh6n173nZEszJLhtipPUT",
  "key12": "3UQfc1nGou1CRisP4WvrsfBzRnjcrH7b3DA5reY8DccJXHbtCBWKML3Uw2oHvGwvThsbSFgSgp4pUhX5NSogEF7t",
  "key13": "5KVQ8BTtgnZRSFHCzdSPAvxL5rj8RxuxVBdHt3DdCFrjWScdLiKYySVyNW5NgFP8BVTPXQGrbhmXus5G9Hp9vmpa",
  "key14": "5BXCA1cdkkMiMiEvFphhMozD4VDKSSLABQeNPpwMwLF9apvxBW4Qw1d7fGQWbVqENNjn5mYLU17ud2bT1UB2Wsha",
  "key15": "2RscAwZKyYATG3pMxofLjpxK2hfkuPv587Ucd644EspecYidUfikVh5xbkPq53szNMp9SLiPffynKNNWipUNpVF2",
  "key16": "4gjfB7mTSRTQS5pxXckmtG7otDt9q2wkXayKaSzdegCBpBcJ97HtCt2KwGxJc9QVJ8XWcGsSKsx8gbdKxYXoGDby",
  "key17": "38vHZP2vuhotLFyKsmuP2d3JZ6GVctLxZaUo7czangp3vS46ACzpDH5tvnXD2s6rQWrZiKeFip5m9t7m5vp2V5Pc",
  "key18": "2JmMUb2BpiEkDdHaEgZcS4wK9tVv6Mj6fHGSEa6bdvQmLGPEBjd3cMJDRQyLyabErvYe5QyXXd38idcr3bS1WrPr",
  "key19": "cVB5aVYZQz3Kx2uJeXAP9TuR4nvCMypUNkvCgN4SpW6S3tbZsjKxVUTRC3m2SRwqux9UkL23J5E6KBaVwADW75T",
  "key20": "5mXWhdkDe6eJTiLmfxXTyTo8hddcV7mMHqwqcWS4vSEcszGVLm93mP5VopzN4HekEVK2N2WAAmrj2WFqf7jV1XDW",
  "key21": "2WGhjTFJKAe1fBhehtxaSSkKpDWfQCYpXugvMR72tcq4kVgarcUjKWfhohYZJojGFA6KCJpHJM68xChoDDeJhnsF",
  "key22": "whbh1EZ4kxVoa8YUYRmJiJnDaNBFaXhSdg1GMwmPjLUvxLtxv8Ab5hjwgZXGmJ1kmg3hg6pGM4i26cTyy2okA2o",
  "key23": "5B6Bddn7aB6fpoh79NcKUi22zvo9daC96JJFxwDxiLBsyf75TNQHZpnno2oyaUW4LLsEDW1RijE7itXGL16LAZgg",
  "key24": "65cYCV2AMhkUWUeDbKhCZQkqLG34MnTncZWY7qgrzMbFff5RvDR55dnLmkxbCNTEpccRE9LhTKGuXdCrPVkop5cq",
  "key25": "DD9eXPd7Gogv7EaP9XvmmVgGQECdTWoUQgYx1gu17uvMadUyeUZkqZQ9GFhUexZcTFSN3n7gWnLEz5xnRrVFZvd",
  "key26": "3CX8HUNjrGwzyBmPyt1iyUbUaxw7KfSX5ww5ifpRkw5y5DPtbYEAzZGBu774UHEK6oTj9h11mUAAvnFudzQyUKrp",
  "key27": "5hJ4QNKHgqKnBDJRhbP1ZR2P4uMZiKnSDUP7uAftyUNnZWcBacV5VFyaRSzqYE1uNVk1CkNYzfAmqwhbVf4URAgh",
  "key28": "3YekCrwgz6x9hFdo5gL73akGzrSyGwgvxCmMFZiZFxjrrmnguh4DgC2tEmzvGiNhJKC8ZXbYxnPnqzhZLNowmiLV",
  "key29": "3RRdihHAz37f9w2PMdjWukE4ViCBoAiz7tYApfCk3wZQRn9YCfxdYSPbxRyHmxpgbK8zUHWHZrWF4LgRwauYsNRT",
  "key30": "3dxuysqPwCYy5TZRcfScHK3e9AfbxSk1gtZR5g8Gq9REEM87Jy2KJmDqQJcHsibMeWTnkPtS1yzYQj21GAJMuc84",
  "key31": "5iDr8EchizsuJXVDmx76tTQL6wrUm6K3rLd69eeyuezE4dtX4RG4sLKVUFkbLHFgf7LG7GzMUPdj75QD4xo5tA6b",
  "key32": "61HaaXVc2fU1ehSUSQct8zDxSzExWSf9C3UYZvHLuVmC6Q3jh7B7Y9nEqJC51kLgHwmRqHCkpu43x4XeWBceyKLN",
  "key33": "2jo1qw2afH6xkTwa2dBBm5m8zh2DLC5bxgkFDNmpMpA1gtNZMensms9WicBmw1vqsxr3pKCfzm4uacovPb3Q4Vfg",
  "key34": "2r5ofYAENtL2mRT8hSQF1MrTwUdNq1zgu6JZmUSmTZUe7r16HWN3Kzg71t8iLVKWRxZcHuACQv6REtc9k34YyDQT",
  "key35": "5dZcdCPAthPyymRSnWcALJ7PZvbBLHpoo93ZfxmEzh6WQc1AfsS52i8iaacu8zVQ4dZHCbcZczuNWs9AfxyFwkZa",
  "key36": "6RumQJqV5LtKX26LuBxWqj4wU4ntkcxdzw5Z1j6UB3wfyTaaiiEb38yz7XAmp2y4iKhhzEAkNp5p8c1hyyU3rpg",
  "key37": "J7ENUU3WiTrWA78MHS3qEJF4ZSdhKPq7biLLs6qa7iGjoZ33Gvpq15m87wxybACsBeswQLQD8HH46w9NJkp5hBi",
  "key38": "2nT2vxPhFeAt7CyuMkZjV9f1wS3ZN57EJwytYQDdDz3XVnK3nv4bnkvn399R36zsfvHaWVHAEtpZfJikggWaCRwe",
  "key39": "4d9VgWjvL7DTqbvEoUZiftemSMRiDt9jP2yL4wrMiyzHf6dTayqe7WHXSKjqhNpaANVz4ebGab9jX79SnWvDphgZ",
  "key40": "2gf15U3W6fb513A4VPBHQhsJiheUAiBfYxcz3j5zswz3K8huqAAr1BY3UHb4QaSNE8nem1Ae74y1jSW4WwQ7BWxk",
  "key41": "4FgBnRQZR5PZVmK52HTabaB7z7nZWRvv6jxMc1ydebB3FYMGQSUFp1sTWnDc3wgsVH4CyPmxAqjcpvLXNm8nZjb2",
  "key42": "4PdEY8CeqvgyAEpCCNzHoP3wXDZJCApc7emW9in7RNVSvBHWABixanYTAe93FW3wmiw9pGjMroRQwwxjxrdbHhpm",
  "key43": "4idW2Vrtfc5fe5ssnQWxZgLixJwqq3FCGJMwad7wYmhWFK3TeN2oArdgJt72TA4kTUH5WG8XZh1XKv6CCWYXt5Qg",
  "key44": "2XkYHnMjxEGS2v4KR5TTcN79hBTzSzQ3g1uRDnoHcGEQzbQM655qggZXTJG7YxG7rDMuMnNh5SVaqwP2bCorXoXe",
  "key45": "5oaa6AQFeTJejhej5e4vK77BzpcMtMdyo5LmCqvW2JAuCrZqy5DejLRwvszqTdNHLW9yrr8BqtENQ4xfNBMfFpuc",
  "key46": "4haHg2bJUHXcSZDkLU6VTbxoi466fEabmZd4qzgtgZjXbJ8d2wAMFmMbQVcdHmqoiS1DWYKBtYgDyVYib4hasCEv",
  "key47": "5QADh9dxdm4xHB7s7YnRjg4teRoH232A1hCrQCWpwiLoVc1QTfssuERL2S96rPhw8kzo9ENkjNxrZXiMw1XLgBUZ",
  "key48": "2t1zbaZM9HHdNoHUVUV1iTVXCygSnYz3xRwMyjtc9tbchXJhkFk2h8i25q9LTjYNoDZpo2X1rxSgffpYqw81fKSa",
  "key49": "5f1qugjG9LeMJ8TJ8cazwYwvRgMCgXyi21a694jUvprpDz9weCdsam5pyAfjcg1RUfmuVr8Zt6WcELVNbN8RiPhv"
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
