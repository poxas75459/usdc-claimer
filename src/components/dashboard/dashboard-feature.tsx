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
    "5C3JzTJnkxfy2jnfRBPHFEGFeqE3sk3A9jG5Ee4MgkDYiuyoJLjpHsTDro8PF9zwXKjPtT4EjPTHAMddpsdQMi5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51zAb2FfdpaeD8gzAVuYFhVdURcZuasu85m5ofHFTjVUxK9RN3wRwCAxr2SmH6GGpbSZQgdW98PYSFLfJpygdgte",
  "key1": "yAg4p6jSqSShhHR1J9MpXy9YvendWmuh5PfCcTjmWMdXTkiHZ7MR7DdYQ2bZS35PsR3oeUiiihV4E2CEqiQVD8n",
  "key2": "3oSpYjyBF1ZDwBQQhS5TeF4hKydE5yjZWhLK6uTGB4BkhDN2xLnePELCtiPuoHVyzNtobTo6YxzPPDMrt8F6vkKp",
  "key3": "3Yd458CTgfiZHsLJmMmLhwKjjkZqkttBqdGSNLi8dAKzZq2g5c3aLFruPf1Q9rbrw1JLi13ieHEAbyuQmjT5bDQx",
  "key4": "2qAFVHe6zk5VDg3z4SdYVLircSTPcnpf1qXnBqLuxuNvnQvW5CLa4N3TyzN7zykHe38WJe7ZppVBfgzs3TUswTKg",
  "key5": "4UHJJPuiWXq9k5ZVjARy9Dwdc1jNBnPaDqaq6SL6neFUrKfFdK4eruH4JXWywvA6P5fZjHpcmRixvJeeCGgjS6L8",
  "key6": "27RGgHuGj7EZ7j29jcbJBWFeptk1QXg6rxhgrxXaBU6bqJU1ji3k1rZy16aWn3WuhZCinsDC8e9VsaNSga69wfcn",
  "key7": "3z9jSms3pNeREa5EZoSgckV3Bbpnbyf8hCnMikQxsbqANQu2V3iq8iupYVQLjZjZNT13yzYZi8oLVreJhcdmEuEf",
  "key8": "2VZbkfhR83y3rzD5XCMuR3LhoQdoji6fQQ2TCBjgpUfGywVgBrVpQ1Z9roMXqTzf5WJcfGFBbfhPdJdV19u4NheS",
  "key9": "2N3GW461fQfncM3DM8M3eia9TVEtCKp89WyhB39sdBpezNLwNmWQJEfediMfCrGs6gXTVtf1V5NUc1AZSoVdVYyx",
  "key10": "3iR7TquqGUEed7XtF3AgrQRHboeEZvHdM3Hv1xcEWpxTXg1ACeLcaXC65aTK9PfXSaFwvuVFYzSsvmj8Jrqxh45H",
  "key11": "3cRKA8doh6qqQg2b5vcWnUiNrkvHtiwDpphb4FawkH1oz5Nvb1BTpdMqJYby7j9ydbgrKUwEEaWHbCuhee12Gqrs",
  "key12": "ttgXjr3eiviFs9GZnRc2B9HkZcstepbc4o4nRijAPeK24tuTQihDggF9GjN3fVB26kdpxB7QJ9chNFhWvQBmcxE",
  "key13": "1exmoFykszi6WG1N5pNE647ePA15kYspdv9JxxJq6JKtQi3H1NQe8eghmHJieLar988sVEU5i4x4x93FoQyT5wy",
  "key14": "5aM4LBcp2fXRMxCPawQpjZzpRJwLX13rKrwLAUYBYqbxnw7k9CNJuk8nE6gtjfuPpMMJoPUwnTWYJ4jisTvemrCt",
  "key15": "2opKVqJmXpC5Z7vTJvxvLxPFSchBdNdtkhGxNveDCsgxyYq9tizEc93q5dp4FyACuq6jxkbFthj3sX9hAPwVzrsF",
  "key16": "YnXqdNk3cuyUjgZSTQED3bG2RUHzRHq6p77DDpdk7HCiSBA22NN6DbBfBWhenzHZjaRVMWrcfuqukHwaSFK6yhm",
  "key17": "Xbc3gYDLemUtuwKoEBBQKgAfzgF7iae3yuEBddNwrma7mm7nVCMY7VWQqaT9rorXiHJKMP4raJdqiErumzns3YF",
  "key18": "7BnsFTReQGDS2onmvbUZX9hncyAxmbvgY6xJweQHa5etHoHZTjiZYxDv8tyYUSLeQGD9bNQjXTBQAWzoBv4DeGA",
  "key19": "2iHRLN62wggPMjLfDSWfEG3co85FSkFQ4LDhKGeS57APSqJ35LXNS7XrkzFujD34LpaErmmbXzHMA91ryRteY23r",
  "key20": "36NvFo5m2UoukHwmAkHmcQwUj8M3ZwhU5womBKyLXzmFvMYQ73EEE4mQLQvCmfecuWScezF4FarHLMEBX6M7sitp",
  "key21": "czqxEVH9zsT4FksSQYTEUB2ukzE6w1sKH7fUnNCz9oEEjV35TCfwVufn5Baxw2N3yf773YJ4VBRpzwqPxg7RnTR",
  "key22": "3ETQfDKn7fApNj7bvLbZLVL4qYu8BgbJTaGByBWm4Hiw4EqVYgoWXVFtuYm9F367Jte1YtM7t6HwdMC3uXoEhacx",
  "key23": "62ZUWLfFwTFkk3umkeU7Mkuxtkpg1hmdyNKSAFGD76nfCGapsFcMFN8npGjNeUNnG5qeY1qwkzxAy9JkHmBnpvNm",
  "key24": "492ddJ3TATepnvDUrNbyXdSPEurdHEExvupLL4N9D79SiXUfjtokVbWbgfYdNz7UephvsTFgv53nb3HLzqjTs5GM",
  "key25": "4ijobZQF1Bj6enjTesJPM7PWQqthB5mViM7CaHffeY5Ung1MzgeeN7kqm7c6Bb9C12VJFM2gnykYeP5k8wFKMJ16",
  "key26": "4byQurK6wyVsMCGCvrTmYjmUw5FdiRogdtjDv4Y2YUVgR2qHQB38LeTJs44nvAkLYKK54BBQfPSdEsdASNgUCdkX",
  "key27": "5oqGDfCL4tSg6kQWpLqKpHbXkdJAqj9U2qMpvyUD3PwUaVLXUTMNJ1yFbGwcYUKfgEVNTLsL9M9gATmRAWa6VPv9",
  "key28": "5GiypiYfZoipQmeu5fWoJw7mUKWKuqYitBQmRqDpuiTJ9zJLN9rVPawZDtarKWMdosz4BBbJ4qeWPeF99PZQwHy4",
  "key29": "45Fgdj2HVbLSNssiMcgUZkvJqqQtngEHsYZ4rDY3ssjAitG69ePscXJTdns7QwTwyrVu1v9c4o5Bd4831Vjq7hrV",
  "key30": "4cbHFrX9vGbGAEdABwE71tAzigJm77qctKC1fq9CD1ibxcCea9hdQyZEJkeSXj28uqGEseXbh9HhLZWAcrFpcTZt",
  "key31": "2PUQWzUSJwrXhcqynNC44LzPc37K4K97Y2C22MJ2bMw7aCxoQty3KjzQL2qUfrhBsUMP5W9euJVwqXq8kK531sJM",
  "key32": "4S14zhzQvTP7tMkkFbso2tCDHss1u75YkegCPh3rdSeU7fu7EFVZqEcT7dr7mw89YBuP7Niq36zkU7ru765vYx8b",
  "key33": "ZJYEDUxNBJLq3KSEqCjdStU1R9HXFG4sm6ZdemSgghptbbMqaaeRv12Zq9Zp33QYqvsYVnqms2h3Eb4PMcFwMEF",
  "key34": "4GAHn7BEBZt6xK2mjUHTZUWH2Ur39MtxrYn9ocGd5ZLDAB4J3dN6DazwdCPNVjVuHWyQavfzerTmm3KvidoH6SC5",
  "key35": "41ybetVJN2QscYG9Kny36uYsjhpLzDL8ZE6c9WfjjJQuJ7GfTJfRtN9t5k52YgbjRvxw5SRNUAmQjCGrwE9R76Ww",
  "key36": "5A66Kwos7PrWRK67TsE7FziiwQHjYyrt5QVksE2wxuSMrw5EHsDsbquqAvhBvtBAyjwEfNuGa8MdDcvjxb8srCrd",
  "key37": "5z9g7T7qDpojHShb7fpEdh1VQ6jHMEqgniBzNSWWnb4J26qmapXuatPvx6oXFiX2j1AdGfZVBFUWdHEiY1iHeSRk",
  "key38": "53EL81q2VQhTLAFvCmTZsk7NhZDtmPHjeh215Ljq9GbRJsqWxgdZXZjK3ydtqkQZGRbvpEG8d8T4dcKeHJNELT1x",
  "key39": "4DxrsVagGEGnTJkwFpXqvmK6r9nQbtqNLuWcJ5dRrAk414pAVAwap4LZL27Ub9qMoSikkzo94tYcHQ7TQo8ijET2",
  "key40": "3tUHEcVmY11jZmCxVFebbsPhxWPXarV2fsmsyNToQWi6QnETDcgGHSRzLqZwXCG4vqnJjRcHgrSBgfRKZNgWduUG",
  "key41": "3hWVGZdY6HprDwjGs2QWnz9JxoBySiEoXefESbWbEWdUqD9Ux9qa1goVowYEnUanBpcNqPxRKxxZSWhk74TmxXKF",
  "key42": "3Gr9GpCjyLcgJsb8tPo1CwWWERPufuqQLXTzU8gXj8KDDqbt9VSCYgStYqMMNGHPgFvcnkX6WCy62ospsitVK262",
  "key43": "2Wcfa6wzKaNHTsqZxisNNxGzB3Dn7jaVSsVTxgZhkmQZcVc4anQKaN7bNKqMAyjd5t9A5m3G3tB4pWtEUXMGWQbx",
  "key44": "3ycQn8VaiZLQyx8tHTVhLLbaxi9m5xGExnnR8GRU92tNbNshctKaYeuDTHdEChs8PVVoFh7WFb8D1MqKZrsChCHs",
  "key45": "QC4rPotVpiKrQK9DXkDP5TZWJuZ7py3srDwaggqVkFVi36NCbodd3VfCRqPVZbGj7YcHHvAs2wXt97fvooiifgE",
  "key46": "2gj69H4nSz2UiEWwi1AMsxEYGHhNosC8uLdDdrkdXk53rR6qD8pcpor1JGzscdHUpdZ4LtCv9rf7YwJfYHDNLt8G",
  "key47": "4WUpSoNErW5aiMDPG2NQ7VuW7bBB7Mmd9CkrR618pg8wiQrZSTjph4LoWtAmxrjWRLQQZu2kKReYBgh2CmNzgGcY"
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
