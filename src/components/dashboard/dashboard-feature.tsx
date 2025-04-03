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
    "58FbfaPdNzh4az1koNKDwHpTHSHbanHQBTwcBMN9y3qs2i1W5hwb7pTQKWaCSMBMWoYivzYB3GFKwkcacsvPi9jc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nRp4pR38P6ZENAp5UpRGgRbNA8EviL77c6nfiSQpViuBueCiyeejjE5WSjEP27tqiBcDMK5vQeTc1AUQBzSAPT8",
  "key1": "WoBYmnDUdfdkEaAjM9Biyhb6SkrP8augYaYTzrpN7SPiVwZoZKzFESNf6B779kFH2cE8rhDVdESo7prHQXVMhsA",
  "key2": "3vgRAom15ypFgbc7iTwAKHVzyHtcmzLuABB8sHFkEn2RP7BcftxxrMo4rYqpLAH6usoqa3JngEw7bt2LFuUgF8ba",
  "key3": "1kas7eMuhNQaWNxWKnuqB5LERnmSvvRzkj3sNawjeNESpGx7sQcZf8uVykC2hRX3KLEASg9eGK5wfCwTnuJNoBN",
  "key4": "2oMYXcg6srbDZDyFry7TZTesn8NeWgGKmTnSRV28aCxHo2TeCofZgL5pCSZRqUFgs3EyyZsgtviwChkWaQVrhQvU",
  "key5": "NHTfjbWKhZeyYL1Hv3vS4sDGmnBwV7htzXrRNtQ4ghSGe75cmMKaHbJ3U4ZCovgYjfxNCvNgMP3tMygeXLK4Jr5",
  "key6": "4JcqdnKNMfnwffGfZeqLTmuSRAi7DTJ933GmbJVDQuuCsTJBezu1iGwxvcHQdEGdVVZpDwPU6PxQqLK2FzicPkSR",
  "key7": "4mwJeGDAhKEnqrTj9JoLf29rAreRBizHcw2CFMzqaNcdGJncTe4NWDTGp5CRXjiiUJfUAfDb3LtSwXb1RMWMQvsU",
  "key8": "5B722tKMY1isT8UMAsCBE3aPuGAdB1CxZ3HekUdarS55iSUfc5FYa8rjEUtC9Trax2AzBJ4erVu1MLYCe3wKqdqZ",
  "key9": "27r6UX1tCt5RSyFbbbJ4FsyjvwMzKBDq3mVRD4ADty3fowp5JkkHE79HLkY3DuehHZnyo7oxv1KGnh8zPGQ3RsFv",
  "key10": "2zCCpk6s5WwjeBpYgmEeDGnjWPqjopiX7nx6BgGXSzvqjsTnK7HpUfGANU9XC4Eeet49LWBjrmhHorqDrfH2Y77U",
  "key11": "376oqmsEB5CqBiwEutruhoWcbhLqUvactRrKPC3VNwjE81aVoN23vhdXR5WjER5X1tbP54FG8SgqZMfNM2jbd8hD",
  "key12": "4z6GnLv1bBUbdrsgpzurWTeSZEpCNEwvYhGoWsnxY8bGAuRt5Y1kacw7bLaHEzVsnYvENRQbvWazVZDCVEuRiesU",
  "key13": "4p7EpU4q4hv77VASgL5ySqd15QhsLsrs7iMM2ugvxHy5jHwVVAgZwFUxMdKxFm6LNqafSFCtMNW4GbFsHhGmZaWx",
  "key14": "4V3iXddQjwLbaJBd9MK7kTXHb2qMQX7Z82mN1vcne1bb73eBznqbLanKYR4sJAof1h48PgjP3PU1EmcgadbAy4fp",
  "key15": "4CZXaeopVMPUmWTTGhD6aK9HobiLJtzexSoJvYtyFXQcTtPMRRuKQgYBYY17FxqUP7H5kdc2Hg9Vjii48sNRpgz8",
  "key16": "9FbCjxwztG9jGfbmUUyfAbENyQsZj8VjspxNcPmpe11iuwLB3rgRfRivTxRCPu7wrKDsjW2UnWo4oW6mA4zArEX",
  "key17": "2xATn59PU9nrzcw8qR1a7b91Wf8q9sw36me7irvQui2NiZmpa3TEB3KctoRG4bhVWPncu6B5yEtwuQtK7mBr4seo",
  "key18": "4ckzWQMCySPRLadFuHswfftC3LsjUJZQJbCTFsrYX5FSjEBPwWquTy8ohhbjYrYBMrmASt8XKE8iqMq6LW6YRVR",
  "key19": "523Hjgn29CyksHsshdZ3JMvk3aKcfJQkxVvQhXj4uUN9qEa6ptcQUAG3s6e7DbgciMe8MCiKzo7uBLNzJRVe4U6o",
  "key20": "43L6hKSNqWaSEfWckvdQxJDMS4V7G7vFYeLjtLhX7ahM3C2qJyNDsbBSBK3jSbrHCe2fCNufhZcSQKBgzhZanRMB",
  "key21": "5oRB5EjysQMSskDkGP8afY9ZNqYhsDDKmoqZyCCAYEf2e12KYsHsLZEi2W5khXwZXi3LTWgU3hQNtiFxvfhw7za8",
  "key22": "3DkumTjExdTAJuwb9eVf6n1BPhsjb6QZyokKN9dntgH9chNEdQycf6rNuvCKfdWuwxfmvCpVFS4JqYQMnBWn3yax",
  "key23": "2utxDmsGxEsRdN4TBnMqDsdHGhSvf61c8Z4zpTfbshNQcpBQzQ96PSrG5gHMdQJnUksp4RTj3R1yCE5K61L79nij",
  "key24": "3xPtLZxBqr3vmqsry3QUMu663i4fVAxmnPrSxPTZDwn6peiz7q9q9WykS9KvFq5ugdmhswgVCkNKdUY8eMaAveSn",
  "key25": "62tCznPh3BCRJciTeKUtn66cPNSG59f3uyvgezXWeEoUzX4tFgXHhByE9JgyMpXK9rcFho2T7vmoQaJERc8R2avD",
  "key26": "5UyVNBmhoRNcJNBhiekgHZTM78sabd5aMFPs9tzFTGHKBgARMoX6mfDT1JyonSaxAe19tYNwZcY36x1aHTT1UeFz",
  "key27": "owrNhePBQiFwSSniEVVQfVHwPPLyoFcxyQMWM1Y219D73k1MriUkvY6uZDueLitZtap3mE5xBKG2XmCSq8DJAo7",
  "key28": "43dpfEd5bkoyvbFQmi72G8sb8U2GLR6HSLcN4787NTQe88jmPgC5PYPPCtzzrCxagPkyfcCSwTF5YTupzKW9Tb6g",
  "key29": "291QcZouiVNCWuapEStufhNjZwbEbA3Ci6sXSiL4mwSzaajoD5q5a9RWqwUbTJFSj3aejw5hBqr9DGSCCBB1jWLM",
  "key30": "4krnW2qFm1mdRygdk5orVKiMEju4rXX7J9xWksA5Rzjbaqcr1k4V1tJ8WZkCP4rHCqUFfxnzKZo3eu3JXrhjcx5T",
  "key31": "5vB4n8rrsqRpNVDhJteTajhbusFLABxEjDrDFruZ4Yy2Q3MSBS4oD6KZ96SfD2YG9ZLTBMnnqJu9JgWcE4gKJ4zN",
  "key32": "2iofh6UMQii9Nsjj64MXHTfpsX9RT5hVPBao3qqGiRsysDQ8XZEiaSpRBVfFNPYqPyUVTbgx7NGmJoPoT55GGeHR",
  "key33": "53rmXb4RBhaupC8ozUvUS9YmqnNXXWGMc31PAkcdV2NNqYj5EZM7YNsDLYwSXtptYS4DUffuqMy3NtogkR8cucmi",
  "key34": "4aDBLam1ycigv6dxXmzJQBaq69dT5bXDofLwabd52Jjy9Vx4h67zCUdPo4MQ12bwRrALgPkiwGF1vuszgQsqyyd4",
  "key35": "2ruo8Nwr9rGF4oPHXWACKwAwHMD5Je9KwAbbU3ESoqHVrPeJhbKN7M1waSyVU4WCfbbwhrHdxQ3S4caALaoHmA2C",
  "key36": "5DXC7g8a3tQcNQhxDYL7s8pp5ad1mj6KFyiBSSgCvkYap6chiP3B5j5XLvz6iPankpufQX8GhPY7v72DaAA8paFG",
  "key37": "63i52tosXsvCP3dFk4aFHhaK995h9xEDc2D7tF2p57ePXMeTP4vUvZKfStsvWsGL9Y22wqhGvzv4ocndgUj4tm6h",
  "key38": "pfEJAwuyFZkTEwm9cYWfBvcTkKSxX7CCPRo7nvBvZDQc2B2EPz2qGpxKoQL5uACLzd5KjDLxWQyfr7MNpUstsb8",
  "key39": "21KE1Wh9zrRd4D4Qimvjm5N1fBDf5pGVdU6kjm8MNg7i5fUY8ZsnRCQGuk7df87pMTaJLPKDWr2PsDqd3tpcaTZm",
  "key40": "5Q9X7sbWTM1e3tWhPQNTszb4i7F75Hr8Aj92niGGf23dCsLZJvqxMPWYyP9ppfwBmz79fFn2TPKiu8EXM5FJRvoz",
  "key41": "22zdU1fVs5WUUtfHXutpsK3GknW4HEtwnh1tCGxfPrPQRJCPvBisLK4B7gXrPu1qmwhrVS2UNDt7d4tZEJrTYbxd",
  "key42": "21DcKpFu9UtrA1hu3KMSkbrSTRgoqw93dU4oUdHaUNLxQyZpcLZm5XTALA68HtwY4V5gVfzpmHFTiAVcDwhqqiee",
  "key43": "3oEYCRQxPJVxUmpkHJ9KZtx8uK7oqzjvUVnNwAiATDeLr11gJEXgJrkeEenY6V3tGvDSQFJxZJ3Mg2iQthZqaaJp",
  "key44": "637eo3erjA3exoQivifncect4PsSNQjfigXoG5KRBAiBdjHavVkY3KKNLBYQugaPxQaEB5GvW84j2qofYw1Ehf31",
  "key45": "2FRCNiqeffNJ7XhitKcpTnqPkTTVoNZ9wWMWhxFqVo6NrRsRzRUZV3JZuQxcLzhznw7SJ6Fimwcs8FkoPEaKD5da",
  "key46": "4PZwtygxpQd7kPgRR9VvQ6K56dBinpsuw4NB5emNBJaxGES1SibCVmk54MeinXQVveBHxbDWeePJx53tAv5Yn5qh",
  "key47": "42k7cijeKyVHjJD3TuuTx6XVtSwX6JPbqkTrx2ZkdUDNstCr6QZrbmmbjtRh4yzwvP3YZQrPdWWU2VkaPmDUjsmb"
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
