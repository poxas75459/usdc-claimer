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
    "2V55eoZs6TV9yVw39duG8F6vsZR9EBwqu757zwu6QqkA6XvhDxgiaFxJaZ3NZQ4mpwNhmbssG1YY978t6d6pHYaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dY257wA2wkFXbS5KYbzjtcqEPS5B5E7MmZ5h8cVhyc1WkFfi5ifyoiDASF6fqnYAUZWGyVbEEPQRfDhf5kX9CB6",
  "key1": "5eBT6LsccTzch4upiQ6V6Ek8ukGWsEKCwNWtec9h129RNCwyD3KjAktf4oZ575Zq5nc3PNzsZTbtWdi7sjZj7DgP",
  "key2": "3tyzjWEuRR2njxD4cMgzq1khMd9R1FW6hd6VpV8MTN7ZHNQ4PEGU28ViWNYAM1qZ6qZUQeF2WXWQwT5dCWHrVuBm",
  "key3": "5e2M4QcDKw3upFtMsxhR8DUCwfHTL8nBGT7EDP7eUSnSKMAdinozTaUe2R7PcRB9mPxaDv6anTpoeobaEbvuL8BL",
  "key4": "2XAjoctkFL4LEHZ6mJHh2p4bRptbVgFweyzBQggyD4voCShtVpbs2MoEkSgEEuonEVRAgPLEK1wdgepTzsFE845",
  "key5": "dNprCsVzhGb8ZcdTwEGn3thxbwCziAeYR7okVkECgepYne587k9UH8SePjkPy6dqnu8FbeByH6NWTihY8R7Ar1q",
  "key6": "5NS2rDP6kwpC5iJHzeDNfuaofT5zvSoRGs5sNpGtxK9bL53D7DPPMCNxRj45222SDaouXQWka1FbkcmvPx3HH2q9",
  "key7": "5Jmv1aSh5R12FSFaaTwTBq1maj2UdnbfVCLrotLR9UmD9NquKh1zE5KaFJ832Qpe6kFHwnsBkC8bi4hxxX2dsiv5",
  "key8": "3TtGVn6422EJ98HFiizA5n5rK2GAg3roFkm7vNsrVrzUJQvTrtBJJMzL3z6yHVvdr7Ac6fYbnYo1DUm7SWXBw36M",
  "key9": "5VFJDpvp45LjZkuBTSJX1kSHCzfzBxVxykvqpfr1VJzFtsiEWdeVPJiwFER7rJ4y6TxxbFSmYCBtXvw57NF9cFD6",
  "key10": "47QUpaGPhfUNGDRAKC4XNwQZjyWVJuGGHx9Bkg31YkpUwq7r14VjjSjHEZadATWgGqZsVdLxX2YzejTps1RmiTs7",
  "key11": "5EWyW26YShbyueoehEMhzFGM3wBc3r252ZzdTWwrsrC2t7ZnaH8QtYSNquptPnz2kQs9xqSwNtgtiJXvrV3DAr7L",
  "key12": "1PdnYBfMVZBbpZgFQL54Hd2PHuPEbUnr3hE68Pmx8EsnzsM5L5zPksoJtT4ZyEA26GNr2vKxpaCRNurFc6WsFie",
  "key13": "4xZX7fc1ZR1kzvXpPPiCRSHwq6Q4VVChQRYGAokADg9uTXBB9xyR6xHrbTa5hWLPismjfeC4nJFi8NZztoKdVPkV",
  "key14": "4YKQFdv3AL8oGPGkcVq6gPNBBtN1aMTBYFWzDZGo6HpoYfKsFt2n16ZG64CmxRhQ65a8beHUnhyHrjhG27ksfqQb",
  "key15": "41ko4KuvgNgpH3hPvN16qyCQFZ1KvhqGvVnzxYzKvhrdorCc8bGXaaMrJPTbU584oFVC1kVGziSzasWqh1CKgA1d",
  "key16": "5u4AG7uxDZYr9f87RSs5V2T9pmPTL7BJkGuudB8uvakQ1jKqwKLkokLXYs7yNLndaP1jof3XeiHTbs6DeYWVQw8P",
  "key17": "5zeeRXtoLMNgHULLcTNRLiS1WfNW2EXPKYfsDqe4dQFb4nmtidCbtjFN2vJYdm1w1QHzPVMSoxH1LRNUXRmzGpX",
  "key18": "DY37hcwZ6g8aTgF3RU5MMFsLya2oSXbdx31zN9oo3aojHJM8dTzT7YaXxiWoJvAeH7V7EXpbCenbNubFjF1ENPV",
  "key19": "YiSqHGWocMJs23uPQKC856Ht1oii5FUKscPkpiPfbAnNFwZai2DLD1NxqiHx9YHuoTtwVrQbZAhbwpbnQhFxUcR",
  "key20": "2VhjvMTPhTzwQgEoZh2JX9qFWUcapWRhpWUKrAHcgnuR2M12FbjJFwqw4iV9WvEgTWQL9DGA6hXVBk4ECPTgtsuP",
  "key21": "3Ud9FMNYXKfj7LWJeGAMMaFZpoQfAAwFW5Q4nKKcsHmj76Js3pwXPCw47tvQqYWrb9Mni19vKk5DmBEryZ3zQttL",
  "key22": "3EJpVHsFzvwXECdT67kdQ6sHKpFw64vfSFZEfTZVzKVSVJu16pVNsADNXZBc7EUHa5veNp7AnDTw9UawKd7dFBaz",
  "key23": "2sWoYaC8Fk5FAdfMGbhNqfsbEP1Dx8v3xzQE1zvcvdctg9Xzg4UibJeRhQcaRUkpiMXitUF1j9UXcpjVohv3mubF",
  "key24": "35KGwisHmEU7fG3PQgHa8meow7Spcere13YtKfSAGt9khYjb4UA4JsLpBUa3wFak57wfUpjPUGnYD1S3Gu19ay9N"
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
