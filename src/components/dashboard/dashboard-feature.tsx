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
    "3r2ptDSGM7S1ykqTsLKewm1JkJpgDVjYeSZRdJ9HEmDun3cni4MevbrzterZKCMLNRsBATtGYPKA9Px65EaRdMm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EwKkauHoHNGB3DiSpEqPZdQmdQjoaTL22uuEtjrGPi9exSPQwdqgLB3Sz2T4xCFNweDzsF4nNZ6F1pr2fPkgHtE",
  "key1": "3SQSkWGfY8cjG6DZmGcH831Q6kEEFLQY43imaKaEVnyVBdNoZse3PTbkGkGd6eH6ZdZxMmD3XmT3TTA9AeRmDHy",
  "key2": "2VVTAXin1mR3tFNaCZicctZf4aAXE5jQVxrbzh3fT3vVxZzor5gBkfKC33Atgf6GCMUVL2dcd5PpkTEUdV8rzYDQ",
  "key3": "4yEnNJb84TcZ5fbE4z9atsEoSSsEfVy6X5ZJ9BNxFbK1zrbPDo4GVznprZSnMqJJoifSRoNYc6WgWyE6h3Nu7ZMh",
  "key4": "2dvRk1iQYfCnjK8og7QH6b9ixTnEULSyZ6iiBykZu1kHAxm47KGH2iWyj7MPe2fxVx8AzUwxHUV5Pm9To36Ce1Be",
  "key5": "62y559E3YjJ9tcPZnGRnG4WrAhcQ9ZkLMsHDAkUuBkYWpTB7tzxr5JWhmsqxiNxXPrTer5yp7HHkh23uGy6Chjgi",
  "key6": "4pMTu6opVwcuz71M3xUTVXPWAyAMJmEbj49MaU3Wh6CFpNfsMNiqDdtegDJ6xiq111HqYXJ4T9zHbkk2vdd8pFE1",
  "key7": "5u7TdV6qbrtXhKBPwip1H55U8iBgq7YtPUmfPcRmRbtmoy95FFBwxsm11BARCWVyEA82WwZxcze5WtUhQ2S5Djfw",
  "key8": "4V1H4JsiccAsJaDXBjP7kqeuQH8dNFRUszPmbkyAsfPFgQMeF5hEsYV7uFv5NCrzTkJDaTiDoinKG3aimkZ6DV37",
  "key9": "2DG1EfNxUEAXBBEp35a2oLczue6cfkrh23LhRjjqhiuG6dzw5yjiV228DrDE3smk8V2x895BXz9EMR74mbNsU3eP",
  "key10": "5caE9argspvmm8UsBkjzhCgVT9UXVQPGCfuZJ6ZuTYihj3aWwywyxEr2eY72tbvdqww1McYjCPowUaGktFyqCzeW",
  "key11": "5uVaJPJ4ZeAM8DACxhdrV483N72dptxyNK1MqtxeGKg6drMsgT8ARzbxfJHtsuqcPwpkDD8diYuKrCHUhKJ8s5R4",
  "key12": "bwuhKnkQ9TWv1FdTUMXXrXQN5f7HndzeQjB9peBkVFTE6pLJHURZJNTA9GDq8NTsJrNAPwoJx2H8sV1xVoLac6V",
  "key13": "57dbZzzXR8h4WW5TPii9cYVGEDG5nocLgqBxwosjkKCLYeAtrHhvcLDjZUhHJqmP23MmBp9yeGS8imNkmrhk2hV6",
  "key14": "2B6mMq9LucV48RD5TkbzzQpLYEQFrzpdUhpdLbs43LN2FP38AXVsvX2dDRDVrAzNcxCEdToaDmbfgpRgxbnujJU4",
  "key15": "4QpS91KbERXfAobpNbkMnHrvAj2ywHesj3rMxRoT1E9c8J79mWzRXifGuTWPurSJjKPQWahYqjJ2qyQTUnBXUKzs",
  "key16": "3GQ3Ka6p9KChwfk9QgGhB89zhV9dLhCtyU2E97zSH7bkY8amj3iyfjzWN7eAJhTQ4q1dqAoKg8HZwEiDReh26EcU",
  "key17": "5TudAVdfnArZ2sVqCFgeyZr9a6unRcFZXGoqvQcvy76AL86noVwhi6ZTugBWRTYengMMJhSkFAYNfaY1dLfBNUuY",
  "key18": "2aL63eiNvLecWA1HHDcHyPVygZYeW3cuoiZxodVmC6Jjzvw4UHDHXeRDbY7ycDWz1Qosg3eTv3F6bjTU4KhAnkKU",
  "key19": "2MVrXqi9SqCoYNVs52fn56fGC3DV7YyWwDsKeNJWvi2KQH2Wn9k5biu3y1ueYCDgM2o4MbtPvUotEPsC1QsZo8k",
  "key20": "5SyiyF2SggMuo7wnxd4mWA1YdkiLaSfkwggQhsyz7hwANhwbEVNEgoKzsCXn43XSirxq2mzoa634ayHXmbc6CPc8",
  "key21": "os8TGGF373wCPNSFMyqyw99tHt8VqCC7aeJ56eFsCzHdrDEFWyA8yN5LaghVydWbD7yJp6LceULNSyrovBy4UQa",
  "key22": "3aXV22oEnKcUkdXiaZWgYVSHSHLKnzZyDbSmM3QShZKHYXLefpT36CMdBiy1YkVUiAsRDVfsE1XjPzXGSX8BzRVv",
  "key23": "4TpAgK24yDARzqwFMqnxpbVJNTJUp9GmQTipjUcfeqgj9jq42mKCDJumNSru7k7TRfwcmhhikditRAyEFkcA8VKT",
  "key24": "37HNq4qxRjs4AY7j81N3Kzr5Uem4NtDWbySFLWPJ9TBNBMoC8k184m9gP2PavfM1w35zqVWiuP8d2RsHYVtUc6T3",
  "key25": "2j6PdFN1S1bTzzzahZyiDUTssBdwcUgd42JyMEuhMh5k1VmFgu2WsdPshfiDpngLDoPuBTQroeKKY98WQykA34v9",
  "key26": "389TrXQvMrMYsaqRPEvLkv1knSDCY1vmWunvUYTRT4VZ7tVotsGf5BjADM6oN9kkX6TAvV2Z5SVa18Mb8s9UAvHM",
  "key27": "54m97gquqibKd7tbKwz2MVFjxqp5x6E9cHZ7TSM3KB5xMt65pHmAFovUqb4Rpe5fs98TfHWV4rtT1t98hfr4wd4d",
  "key28": "4kgVVyfk6oygK2bAdKXFSFQQ4Z99T79pWC8xom6MBvN51S68JgqjFdQodcVSiSBpGRbt75PwNMHd7a5hA9pDymoz"
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
