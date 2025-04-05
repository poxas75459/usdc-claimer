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
    "3vKLApAuxF2Cu8So2nF3NmTXCFFNy6wax54UpTbHppYWZtcVvGup1CzcHCGEKKPPuLbE9S8tHAdgks1rjpB6eDPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38sT3j2mSoPAWN3aZWpmZ7SvPHGDFDmQsjsh2Sb1ojREKjey3ncW6tvHWjtodMmFZvV8oSnYG34L4BFJDNL3ww9t",
  "key1": "4Hq4gtFpMFc4AieE4jWFyhMyRgeDYzkpfUFzhbkv7EMtkioyWVMmYXqEN5YrMahsURZHd1pi1bRVoQqBjYD6en2o",
  "key2": "jzHmLeEa1d6YjCtYs3xVJxNMih6Cd5jXcoU39m29MX7f5XmAjvndMQ1xHSjeZ1syx5yQA5P599NzJv6uL9rSuBL",
  "key3": "3KJahzjjQJxyZG7RT3BHhdsRbjRZbsqYjPC9cnLnFScnNFFrAG3DweDC9ofgcJXT3QjS9EXeqy2p4ZwSywMYtE7d",
  "key4": "2hchhFjggHepvQzpq8wsBiwVBzwT8bwFWf7Aj5GTnag3pFE2Xq6fytVQhVshJiXyh2hW1TdsbXKJ5XDXRZwKronz",
  "key5": "4KmDP6Da9JW5YPMgjNjLiBHjJBpCXoAjxSkKQQgBFzQPrXthEDxq3ruzqXy1H7kJQEia6EKabH4eR3eJqTX9z6MK",
  "key6": "5od8QpkMRoqaB7GfVH1m8bEHuVbRCjpDReWJuZSW3i3mzsAgNmEDgKALbGf25vGZXrAxdsrwksvXHRrfSEmJWqcd",
  "key7": "3DP7sXWU8HNW1Eyj9NzWwJ5QGyGiSdPWxfdv13AVvhb74A3H9KRUEcpdxLQky4Tqbayyoz9VakgWsQXQom7nxkMy",
  "key8": "32N8TSNsJEzgWVPWSjqe1LuT2KpX9WWbDiH96Js2fR1fjYxQLw6NBqQwWY1s8PAeE6uqradz7aqErvDLFobKxqyY",
  "key9": "Y9E4oWyqXeufzoPLuaePJyuJ5Az9mDspWLKPGKZ2rkQtTcXNFVdGi1dhhdMhgdZUa4Nha8tjbiKXc41fHpfvCKD",
  "key10": "67mefgSE7eEKPX4kJre3Pn8ickTSQn4uzkRnTfP3RtG6ekQyrYbbS6X5iyGunRCkhFKVe7CTAJsDSrC7LMJY8PUN",
  "key11": "3CPMfSEV8B9BQvCdbGKNWDzZDUt2qFdz2qQqE1eRZVnPz3CYHkjreqs5muVvJbUrFDvXNZ42MJbQbqCvMe4J3kvG",
  "key12": "5JwCaDHCyZ9Ed8x29G6AydEWLa5CG8wepwVi5pNcnKFrJ7fRxESvM3rMvri2cK56hKscDjH2d7zEmUphFirznmB",
  "key13": "5p13TJ87jCRqwcjEwCt6opq6nLEMtZ6wfAs4H7XJ7ZeqMdDXjVoLsWNDVM4MABQfTiuUK9EsjWD3CsQN3TMs9ui3",
  "key14": "VdZSYv4RHTELdR6UdcskVFmpS9PCkQb2aiAqQunc89ELwhnyfBih3o82gyNrB3GpfZfz6cZu5YCwAaDbkboCtuy",
  "key15": "YV7KNCXmJnPNHH2ric8GT7VGcKxJZJw7ueoMPniyUQVSyEWc7Rbsbu3v52XraiiV9qhGmkEVza6xKzstg2DSsf6",
  "key16": "4VT6zb3UxwPfE8s5DJUpwjz9BMqo5zYRmeemykRm46M4RJv3sZAGtqEeTDUctbcVfuWaz5V6CiKeiH91JQUXGqQR",
  "key17": "3qU7WRuPR98w5AA4MfciKxNK5JM1N9T5RwrDKCoTPVVfGL3cqHbogeQ3W9yEPuWjZL1TypPDpnzLWBUqFkAp6Nzs",
  "key18": "3zvYmizmyrpNuBju2PZEvjdCcvtExUXzSZ2LJdzU3BqtpuswCxHYJ92rYTPZgXRJK1W6X6byShCT2PEosU2ToHkx",
  "key19": "44VKzFCJQ5PMpR925PCRugQ8vHHWv5YVp7NGgDoACejfZnzXWFSe7yv4WXf5pYsHMkKrF4UPvNXoL34cRUW9Bpug",
  "key20": "5qL5dvHAUE1qrhn3bDRmppYwy6k9Rw5HYeigTUziPc1mt5MMwioB55C2yXFPfUkP5fYm38ZaLJK34LBosi8n9NNe",
  "key21": "2yY7RTs6rePpwS7WUCcpCpwyBH1ueupjVdtCpcm2y2cfoqZzXS3TkYKeCSzLYncZaX2VnF9c2jLg46wjTDrtU7GR",
  "key22": "4yoHvvxW45tiHtDB8jFiVvEYnrghDuGacG2YpuofBXPsoN8pYgHuqdw4JLUfFYdemVoWhbeAFLyXAVuS9GcLQxGi",
  "key23": "3S48C8LtmVn2jFJagtf6t7P5iUnoQtVhL1HZmAfptLvFg7P8DJwMXDgt5W3HSm4CDhUhnrEHokiCP5bLMvuw3DeS",
  "key24": "17b8jdVnEEeAv3uhSEee6SHZJr3caqjWzMZAvgweR83kVV8Ckr8uLpr1hpNirLEvcp9xQbBUZ1Th6q2tei7sctk",
  "key25": "GNFREcpoP6ChHJtPmG2JA1Y41JeqRcBYTca9pPMkixVMsLgBp31LY6FhVQBBsG7MDz4N1z34HHBgGh5ciFUVZhy"
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
