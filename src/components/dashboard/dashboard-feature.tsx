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
    "4z9ycYwBLzuuiRbD1xFGQwBhrMxHFiSBm5jxGSX9Joz339q75QW5JS1nUW2GTVd7YBCzjwCNSSkDy1W17kV1dXDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ssieWP6MFJFXBt4Sgkh4KvYFF7gHXKmsPK8ChZqiQUo2hAsbJnMqbDRQWTSDp2nqT71umZXJqzNJv76Qo9vUMLL",
  "key1": "2BXZ8VYxES3sCJykpJdPxG31p8heYCLLRKF92DMpEzneb92qj3RaMfF6oyZ9iFcBNEvppTfviHVD5sXaGxb5ARud",
  "key2": "5WwWsYzauK3UfnM8W2aLriJbkRNkdVcMYQAFTmRHkzSG3XAnZLMXgeBCQqPnRqNsNYq8eH2qqELa8AhR87Pu8mtd",
  "key3": "2b6jyn9Tnncxc9JeY9uHZb8ZSpvZEpRQuYa3ErRYYFN7TCLtZuT4x3yEZ3dGEJGKqZrUHsn8RaY9pPnBkgMt6oEL",
  "key4": "2NFn4h8crPZMZZHQzkAyaL4aCgBCdRi1r64saGvSVxNxLuUrPAYDme4ygDXN7ztEUsZaKHuAgycERA6ooSYBGZyX",
  "key5": "2QLY1JoWt4X7YUsVjNNFbj9qLREQ45Jbr4qAFEQjhP81dix34kzRd7UanoSmxpERi1r8nFtPqyxqTJRzf7mnaAnv",
  "key6": "3FQDDYNWv9VhfQj6FB8Re3Q4do2zhhwEA1FcQbPNEvRndmAwaY6EaF3wGpnpWCJPgfu1S1zSVXuvLSgRUT8q82jW",
  "key7": "2qCDVVtdW9nMMMiQ1RqDqKmXjbDX6hxfhnusaQLR8Hqy9H9R8doJTeRdrqMdP6LU5EKDgRvUVRWwMewN1AdCQrax",
  "key8": "61yRhroz241ugg5rbxFm4ww6TLuuh8wm2634kkFWdPRYUZDjQ2feU3sA2PvhjUNuQUhpgTEsmJtN1RcHE9Xwxmyw",
  "key9": "2319BhMEuq9BRSfD7QRP22WBho3nf2FQQrCpQpKLrvvs7L8ykp7riYqD3YCVajvRXF3MtcfMubq2oADvJSPnogxP",
  "key10": "31HC8GnnCvhFVsUZGkkAAkKizK9K3qDXthWee78MdfEpUWD37h5WT89igKxWFbVni92PiLQYDaRxxMjtF7vqLt5K",
  "key11": "4E4GtZEZ2enmCGzDFpN4jGqjvsszZsAcmw2cv159eTM6XTscUqypJsVwuvnyqsahwE5sVV7z7ng1oXat2zMncTYJ",
  "key12": "3m8HW9sm4k2iYQowMAAQw8Tmc88eLUPTe2ycgmHggHtqMWrcWJrDXn9ZEcB8DwtYSGwSCKNTKmYBFAufEhPct4U9",
  "key13": "5uF8QaJsWiUWSGv9p6dfUbimLeR9VYgGUr7FgeNanBe4vXFeCgoDaVmYZ4ZWMTKVEvEaEMShtMKxxANMSc6gVpKd",
  "key14": "nzSCCZUTw8KEoKPwYQiBsKMgJMArwVACkLZ6hpNTAn6V47zyuqU9vdSVoPVzY3vCjmeMznSXubz4PUpVpkgew8t",
  "key15": "21vM8E7aNJ3UMVoV9b734Y5rjaacNTnzbGjTpCPd47CiAbduEGaVNUxcqosenQ18XqmBk5xNRWcg5HVB8S7iTRUL",
  "key16": "4G8RuhrwBV3rJnbJaEQFBy5P1pVMjc5bwemcvvbVuS9XSthdpK1Zu9m8nWi45mYDPFBPAZLJJXHxh3yVDZK6YBKo",
  "key17": "j1QXN8gZCZhNar18TnTizyKpxPVBMkDopcThJNj87YCKATgjcCiFh4B82gMyf54p9aynUrgKcj3DU5JmmA6CiVs",
  "key18": "2mRdGLZxExh7R9Swny1VALrdqyN7928doXNCjsKWJe4SPRxvUVRczKNijYjGmfRJpDHkdUgJxZ4caQciAVMBzAm7",
  "key19": "2sLduEhc6h51katXw8p4pUMeVpEKU8DDtbsX5eYuE4nbHw8phXjz9qBX27MA44B1innH4m3kkxf2CVYzNvfqSdwu",
  "key20": "hmWvjBSugz9xSnKwSxSgbjc1fsEHjSmis8g6QCrEqDLCdg1vagb1ww2dc5ocTeHGfLVFZ3WRZDkjbx8RHSMDnNS",
  "key21": "275tRFws3FmURp5fv28n2tQYhosjGqXao6ebwPy7SdkxUdiiYRJwNFeLn2SokkKyVdMvJ5bkX7E7MKVBPCsRzk48",
  "key22": "5nt6Swfg8f59rwn2XQdRp5VGr3KnjvbzcrPuK14Hg7B3B8uUrRoavuhrLz73634SYs37CoNHCi9Do4FMpNWWs6Y3",
  "key23": "5GtFbUnWatS58Xtf9LjrMZjASeZufs1EEBR7SRAuAnMJnzBVhWy4ZnKr3AtLBABQjGhrgDmjaH2mwbtuNXN6T21W",
  "key24": "66gmmMhFimmT39eexwe5dwW3wSei5ZcHh2qXnko5viSTbQf4FXToJ2YTW1WrnTs82ZTzgmECxgRZhLtAP5a4x5SU",
  "key25": "3qdVBrTyKV8nci9g4zkgkjubpgg9g8i6MKUGNSWxgWbb9emSk2yB93UQMMnjpFxRdmL1eh3Gm39HwMXBFi1MyS4T",
  "key26": "2BTxjuzZmn2KSC5EMgf2mp1Qr6SSBBBvq9MhKz1bv6PgYZxo6b86nbhwV1HSn5umFmrNu68VgvcU28MgToW8C7yb",
  "key27": "29Cc6DFxmJ9MbKtJKMv7DtczL5X63DvshuXPywZRgwBN1LcecKc9xSNPx9wieywDXiUd3Sn81T7P8AyGeRLeRaTm",
  "key28": "3kEzwnBSAjdU3yDr6kQ7FXHs9NBwLvuZ4p9herDr9MiBgPTuhucr2LVhv9LxsUhm41kZCKDKuW7Zz57RsH84nUnm",
  "key29": "3fSCEWkRYvBbJ5NCLXmQohV1mg1BrnP9YYkc7MaHMpFYyCsGFmnu7XAcyGVZA9SvheWeCmYGc7VtUP9od2YXSfLW",
  "key30": "3kaS2ki9FZGdyPPrASGm2xsEK2m7TxbRSR4PHGbrn2GLvQtMsNGmzs8RJZRdnCLWyJsMcdaELGvqyj3ULQ5GF6nD",
  "key31": "4y7Z5cW7hrZMinHcJJnGeRjfhjgGEHNGfjnXfhdNHsRHQzhUsmP4W6mvajsf6dniuvRmrNF96xAxjDhR9G1UrrvP",
  "key32": "24DKduQo9QW6QFFFUuxZvqANxcqD7LjPLnXdsvDEapovc8Vi6BR2FVwv7484dNWcTeihGEhuuiy2cGZh3dTGPDBx",
  "key33": "2CKU1Dco4byDsQuNLuLVa6uTgo1cpX6gy2eqcywKmN5pV2x96U1kEEsLR8A4RsyUw1LaVZeuk3nZXSyi8fpCmQdc",
  "key34": "3ME6mDQKc5BzqN7NGKJvEBXZh18m2GkaQAY6DNUoBkjnYyUVHbq2XVkLVHG9uMT9ihejKd5wZNrvxdtmdpjH5hzX",
  "key35": "2iFcUYttEv38EH4bskDESXKGqZn6FK2i1yhFH9NJVep89cTFdCaZacEc5Mo3wYLu58KgJWwfUdrGcB6Cyc9maKZA",
  "key36": "8D9uutHCfoJ5UNL6Jc47AiE7ekd1quTrRzpeK8Q1vnAbFJwtBw1w3iVC7hghrqc2Fy9cHivx1Zgc5HkHG3HUBSY",
  "key37": "2chfwdhMQUNYzHc4436evDSzgB8NYVMZyUZCWQvCXASZrcAce6DQUPXYhdz8EmbHETcL1Krzn45VPisaXpm5yiJn",
  "key38": "VHS3TJpKhff1TeEBEpaKvJJx6goMCqx72B92x2CFBUPgzUoCRQ9T6iiH1vuQbzSLuuzUomdmjHcuMKaqdPymNEZ",
  "key39": "2NCNAky7XytBVVv6Av5rTqMv1imkKMNnUGky3SMHG5usX2xnHZRiuQPG975emtjX4EccZL7CeRTx7Gy5maXhQRc8",
  "key40": "66QxjCagD22dEbrbEaz4DmMsmCqDWS4NHzaWm68CeGP3Zbv5K4HqpyxKqrJXt1U6LDXGzwxJfKf61ANnnpnKVsqu",
  "key41": "5rR4AnNzPtxkBMA4zDPmFhg8wNUEkQeWyEx1iSncKua7W6KGtHPWCijWspyCCMF9fCuoVtsJkg327x3RZwo7fkiw",
  "key42": "qLFtiCcYMo2LTT9AKW1FthEBL1GjvEq83DCaeTWrhqikfqj7tjotMSGzhdgCvqHhUxbjo6T7yU2LfUbrzaBysNA",
  "key43": "3fGFMTFkCcQRVQQRFoEq6XuSPF5GURjmrHZ9XBezaG4cNLX9JZyPfhWfhScUKF4KDGAbdx2vHiRGLf2Nvgynzja4",
  "key44": "3Ww4YjfNGkuDj1MhrA9nRdETon55kdDYe5nsC7NgKcJMxUt7T5vYPQd8GAgCCNLhJZDb2h5F7FuxRvXf1W4LRN3J",
  "key45": "3mADFTv5wxpUkdmphsZbjLEs9J9nmJeiCH8xUd7e5nNV1dRNGcDgFPkD6SmHre9Xt8uzRFG3iSzPmcUcQeMCdWNB",
  "key46": "53i4DqKMpjwrvQMweSgFGsAiP4FnNsR2Y7ZB6bugJXYpVrLDbeMQk5toSAhvC4xrdzCBDaJc4BZWTD5U12DkBwt1",
  "key47": "2XWkJgGMN8HmYaqN2kxm4tVa9wazEWUPdenJpRAH4Acnuy2iby2t3MvCG71HSz5EnFstsbofdzargpZC8j6A78Hz",
  "key48": "3z8YAsTenkuweFeerw7y4RJPmwL8Twq8PZH8p2H6GPkogC16dE9825AqzYnDHfaD3fEpp8dfw4d4G1EniwFo4t5z",
  "key49": "4EdbWCXRKnjaiJTWGj5Z3nFoHqzcEfU56ymKc35CiWeG2GSZtZ3NqJmZW5U6AimW2TzwJoVD89G7EarRVvyqBTvr"
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
