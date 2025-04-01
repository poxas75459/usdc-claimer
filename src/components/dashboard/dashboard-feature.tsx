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
    "2V86YZ682y2NuHtYsZNFMfQdtSeHpoAGXKaD1xRs1cgmvsUvPdpxKC1WVNWesEnMGnaBNX7meRJ1cXEc6dzmRYX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LP14Fbxpth14YaWq7r3uv9JPFsgauKss1gW7njaE22CCtM98At2DtRpspdTeKwYCDVRn5hopo2c6e2KdmYZ71vM",
  "key1": "4oYpwjXK5KFKBrZHso5BGQg8WfvEw5bYmzsEcdnQifnkiBY2iB8f7JjPC4ws85hQARzkxtiG8rh6Eu6QyMjYJYeN",
  "key2": "2pzUTybCPTSwdqMFXU4pTvqDDFZQaQjE8B9n2EujtPkNtHUZbv1b1WYjQPw7P4nvTBv2W4KU95FAPcDJUx59fqUD",
  "key3": "4s4GTfWHkeRkmpBzkPZQwVCB43zULqPHZFgPLPALuebek7DtAbh9U9tWgWzfvtkY3dzydGYnqTXC5MuixbzzuA6P",
  "key4": "2r1C82NhsprkArNy4wSVxDUGK772nNCeSCFWwyK3htVz1JV99BUF2UCGenRxigf3dF9iqLvnpdQ1bqxUAkFtmuK6",
  "key5": "59362gCYMSWYxJqbszE4LMBwhTDEP5euxRs7yDxtTa4M3QURLX2WsQDZVLC8QePq2TT4iVudNLnjjXfruFCXHWku",
  "key6": "3F2ygxJAmK29gUAcoDz9fHQPPznhoXeeUXNQCoisHUXkYWWWL2S7gGPvKx58G63qrm75nSxyqu9Qxgc5qZLeywn2",
  "key7": "4tozVUUv6jGKCYkuQAToxJ4KymygCrmhoQqjyvqBkjRrDxc3cZXHRpmMdUWiFghBvuRJPosR6WVqAUYuC5jDMx4y",
  "key8": "6xy3ABkgzqX1AU4rBTRowvhh1VY2tJuV9HS5RMcAQpNNVN42nyUu7ugzQri3kcCTf1DSjPr1w3JNU4hCYjZVUSs",
  "key9": "2ShCTybKEf9h1qhAdRNrN56hFdtnkTyAVv5o9MjTe639kfyRjgHndKjvuCX7e73KdX7eQNchrwtLCYDFLbMt4DVA",
  "key10": "5ELJA6Yc1uPWfv2AKWZY51SDuZEvB2d4kxZhxZyfVtpNFmKyjp5xX8RJwFtaD5DwDNeBgJy3RwJdiKukPV3amem9",
  "key11": "5cUQcwYupiVzVUTdALzUyWLvWh1nidKrbYcyFn9j3wHJMYeHF2gNDAZ11A8woagDTrPY27F2omKjDryWYAiErfoL",
  "key12": "4ESLrZnj2bxGK1mr8FFeoxWCx2gdjqo33QPPywxboDw9QddrKZnpC6EuTFp86ySCbkuJkDT1qTdNxSyZ6UYXkvAi",
  "key13": "2xzWLevHe68JNeGKXKhTJPSmXDm1pK56jydmp25pQSkQ1sMzuHaGKHSaZJvkxLmH1uZZhVtibr3eydNvtLKyrMyj",
  "key14": "F3ZjF2AtnQXGUjmj5wP9ec7Zb5Nx8Ve7Vqr2xqsZWQ7ifzRVeWZ8GhXKM344eznEMR6M8DXjFrp7meAsJW2maFp",
  "key15": "iPDF8J6okujCn1TwxLZQ37nFpfok9TuSgK9KUHtqT9StaAzHCXhZuXSFxF1LH8ogTybewhgihFAH5vDvHE72w9e",
  "key16": "5HsmJXQTorUUQLKAMXWpyGs5Hd41ogYYCPEUrHHyUyiwTogNSrUXY3pqaPjLDXGyLwZtNfD1CH8J2KiuVMpPWxwD",
  "key17": "Chpi1bBzPewkAGDvAmiXxpipUdRicucXzf4CVRCbqVoTMT3ftpda4oF8RLBZApmrWyCmhcECWiFzpynx2GYb9YP",
  "key18": "3KT47XzkiJtgekmTZXeQ7aoqJgZwJr3AZq2FitxMoXAAQxESJi2J577SyoKLvDy1qa8CVb9XBNhiez3KX5JL99Sw",
  "key19": "5AK5K4SF2xmwRHgdTjmiv7NdRXa4dm3BdAnSVcvaQGYTRJXv7bvD9QNaWVb3CVC8jPpUhdwYceRDsRtKX1UxZhd",
  "key20": "5FYFWTZQNX1dCL8JDXP21biFo3CMXu4uHxCdaS4FW9FFbzJTj3tPoToWSUUMhmtZ1HgQc4esL9pBsRTUoVAbHFBK",
  "key21": "6aXXXne7RXiHHqC6LbTrXUGK6AYEPTJzwg82Lczu24qDNPZM8bok99iWktkNwsdqBfKzrsBw8ZwEusn372gHapW",
  "key22": "4DP4n5AKGLXdvtKkJNPw2yr9yGkzCAD9KPsoojQtruihuG6MaKL74aMtjUdoHLEFnCyYQi2UFceuJzKhY4hbe4oX",
  "key23": "cZJB6p6TE1JfD62nnADUFLSvUrApSjohVyBanxJ1P6siHWifoFA3T8kbPcfy6DkN7GdoNFQ7uJHTQGFxmuudmxG",
  "key24": "5A54eaHLcm351n6ubtN8pmreNzS22fn6DMF4rPu2SGmSVLmKuptKy8woT65TFgCrrN91S2RF4uo8gNeetCdHFYm9",
  "key25": "2pUya3SKh8J7x8AHwr1KFmVSeQwjc5iq27ArEwz7f46GCvsuMgXseYeb2StrsXzmTuQpgP81khX6TfQLLAHCZ2i4",
  "key26": "3xtbsqaThwhkKLC4x5SedDG8QTF4crzsdKUzbiFmKupjRfN16rGxeB3hZhPnG2EccZbNqg3kiSj94Wa2yt7YGmoR",
  "key27": "2CKUPjYynwUdrSpSUatKBjNLu2rodtp145obgGekLAuxYGuEMTaDDt1dEpNkpqJnEGoC1WritLtmg8tzhzLbgihC",
  "key28": "4WeCqRhMF2CokHjyKqDg1i8gWTGPEabPA9BDrLvxrz7WBR7ionm1daRVfHvhCHnrhGRjj2pVTwjY41x6rGPchtNq",
  "key29": "3BAn7xy6TRJLqtPRZb1wXcmb6hV5U27tef4SWhLtY8ip2B7dTsSjBSyrmK9yJDo1DuRPpHefJnWvRiMwcfpB9ZaH",
  "key30": "4n16QN95WKweXbJnT6XHXjFFhWZRNjKaJTqwCwxHoW3L1j8R2dr7Mgv4hTVEd1fpFaCixc6LDLeuTzCmSMbjZXG6",
  "key31": "67SCxgXXiuuKc7DgTXeEAfDywzzeDXA1J4UHxeRUc9P9hJsu5SHpD9qeZAoKTgcLrnCoLDKpyo994ghVeLzArGnS",
  "key32": "H1w7t3pkRzM8KoyZGKyPQZPBwdCwnh9DqGrAW2AYdxW6KGF9FSRKvhqgdUSj4mNzqw8eUJFx21yuadWwdqMtrfU",
  "key33": "3HWDCS1hVc2ehFmfSDndbYdMmfLAEtefNzXEEW4CU4nXCxEjhMG7K2tfmu6DYsKZ6y9iZxQLE4dwJzg6HVnEPVs3",
  "key34": "3fq4bc8wTT6sQAxc5kc9edh9YKY5AU7vSSdyfxk2VRcKYge4KJqiyyCgXAX8N53FjJ76KdDTXkRaEBdLyaKUHAjr",
  "key35": "3y56P4EntNPg6zdH6o1XXSoHrw9RS1pDqeZnue1ZosvMtGaLRSTU3e9X4R7xCQvr89QdDFQpjcH1GDmPhEi53k1o",
  "key36": "o4SUvqkCBANmtivMhDzDH4MNdT9pvhYPAAEJdVyyJep6Ck29vq44tTgToxRZN36paQATthvsUvemSmEq3Nxdg1F",
  "key37": "t2pwH6gh6wjHn7KdXxsFfXe7F1pHEiArokaNnG9G6bVHfbHrqmhE9XkPB2dbJYGYsjPXzoXmBFxgfxJQNoDma2q",
  "key38": "2XxrWfhabN5fx5kdke9T9oFi33Nxnm95d7HpJC5rcobnorfmY7eVcUa8RpPo8R5v4LD8jpiSTtYg8U7qGV1zWSTQ",
  "key39": "55DSNHo47CNrinMuAzYWsqNWFKcDuEL2MxBLWL4ijf5zpDzmnvrVVNf3isxKyAxfkGkoNGBkEyzdyDEXDfHRxFdG"
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
