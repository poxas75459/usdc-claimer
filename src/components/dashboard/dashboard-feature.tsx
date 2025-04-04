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
    "622E2EUUqvdsytFddUy2YsiRXK9ToGNfGThEr2f6YoTHrxHNqhno4PqY1788CUUNQaoEMbknNvtD92VJvMX5xsuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WfASY6SY1RaVPozjLYm5mBKuKBwknuLdmvbcSmD5QbkkLU8oSmpy3k7TAEu6bjBfNwiAxHoE3G8zdcit3BuEGFG",
  "key1": "2hoFoPya9eQCZVmVsvGZPzF6NfbJW7ogCAFFxNDaswsH9VTaThhruE1xPDfVAH5vfuCEHtjBpBnyxAmLYEbH3d6X",
  "key2": "4Y8nb6ygzg5HYm4Ke1KLBnaHPehpbncsmJ9iRdQfhza4ypVvGGS93dHf57pbSvhpJDaL1sBQ3Ffh9GdcbvZaHhik",
  "key3": "5rCBnpXjATRoMqzVRgbHz1uw4oQBRoZ6WPHU5g5nqTAi9rhSp6Wk99EiWaf9xQBRDbJ8bq2hkJnbMFTUh5MZZZ7P",
  "key4": "62Z6EcUgQKhgQfndnjWoV9C6yPEqXGaNtert7WxpJsxZDCfkXLwoLu9rp8w1iPdAbQSTu4H2cTa6YjvWntzXVAwz",
  "key5": "4QsKneKFEcZVrJXASKosqEzQKEmddcUsQJDid5UWCJ7pv9dvXPHm1iE1mu9HdxJE44cx5x2PZpPjvV8frj9MhfYN",
  "key6": "3RnTV7G9PX7MCYAecfxL1DzuZTm9zcQE8pDuppKAExVMuJUaqp2S3xszW4DJgY7Q15Pzqn38C6yHcXPP3zaGfSgK",
  "key7": "bWxN2PuRbqGYdYEpqoM1sLcoyXbY2tfZ7V5A4Fv8qgWXfz5vhyQv4TBcKeefrhmFfGqPVG4wZfcZeqV7VHn3FGE",
  "key8": "kYTFE2Re1PHQe7TYu3C8HXmZXs6csapR5s4hjidYuodqZwTN4dQoMZt8oubTquw8aFt1GJCXYgbqFawaAL3kTCL",
  "key9": "z8eeVRmLyJqfrcGGojA81VXMwWPTahocfLU1HYjGpYfHdHJjiWsgCwnWGnsrrzT4hBnCLkEY63jbDEM6gaQB8BX",
  "key10": "4FT4zF26JYt92gbGSKbeJ7HsjYdUKRgYaPa1VKc2NogstB8VrnCWT5KjK1yaGm5iZQZG6rJc47bnf76SFPvMYpba",
  "key11": "41vxuZcMbujhkXEZSLgsiBWNc9hZch5CCLJMBuxCdhiHgnL4aWXU8F7zR26Sj8ZmVBWtvWCX8oHqHD3kFHiNbXuB",
  "key12": "3aSCCB6Uuno3SbKPZMZ1voQpTsyswaNqVNmyq6hygr65RGBHMzM6VTUqor1MsgCF9sTuusmHPjTtr4UAHfmEYZyJ",
  "key13": "2MN9pg2gh8AkguJ5C13M6LwuDThYgRaKJ4X9x5pf1iDg93VHy72ZqprJ3v87P3ZubHbSRnY2oRZTQjQLLqgZWNaM",
  "key14": "5rUULfQoWrVg8Pyy6qeaYz9xV6kfvdU4HvWv4yNH532viVr5e6WcotwYd8epqisC8gQh2uceSNvbTsYubjEpUin5",
  "key15": "3PACnwngMngMKLVgPpEDm655oNa3Jtg88sJXTdqXAdQQEjNjLCUdxRDbnjqf9UTHUpGZoSecCaEiSekp8EtWe1cc",
  "key16": "2LxYqLtPnocLJZ92NbehiEaoESrDuTPYZphizNTyUuZAoPWUpAVtwZaqSRXmLuvesGppDazPNRy4S7rhBaSjYKPt",
  "key17": "2RZPpLNajcr93VCpaL4xrMUs1apkQi3GADPmu4p2S13GXvtRUJAbioTjrSpgjrH5J8zpgZrkC2oz7r3VJJQHQniH",
  "key18": "2mn6Kf2Szq5nJBZQUa3Z6ZT7nvJVrB8ptEag7pBfuijGfzSMsT4x57CyXs88CnCpaJGiJW8RZJKToRqsN92yAswb",
  "key19": "54RHT3dPdPcyYJmAkQDgtnczdHMKDn4ChvmKjYK5dofnp5B8Ac9vfZjjZy9hw8SmQCow9kqcvp1SEV1V9rDVv552",
  "key20": "uELJpGFgaNfcb2FmTfJTdc8aKe4qcVy3qweGVRBsbPkDSxJzbwUUJRRtkdRPHhT6SBxJkMVc12UPX2pjSxeK4vg",
  "key21": "2836dnSDkeMdVJJUXbPNFZzwMX7r91sL2XPiBPkTeXsZKP4spwVdA3PUZZrqExvdX7zbZ6MdMyUVHWRVPdJ5qXL3",
  "key22": "4pTDnQ6kvn1E6RU84VxSBkP1UN2cH2aRnidZyoAdU5VWxhzJWgNPLp2uK2mU5AeVLoQdg3NYsrDvCSPvuLQE8AU7",
  "key23": "3iJvnsu7iBS2TEcPN1V3MUcPRVTzgQV5GqTF56yMrzGvEVskgHpFrp2fqgRwzkG4TXat9nwiNkt41sK9wPyiaqDb",
  "key24": "41vMvCftAcrdSDee8ybGuq7w7q4vxi6Vvyd5dYnw8xigXtenmXHyvVFq3pioAmGxoeQra7TpAbgaF98Bv7KMzRog",
  "key25": "3yHqGvg2f5aoHbZQScvxK5adzUfjyde4uneJ3xQxniknzuU591c3obgqHSFiZ3pvU9VbCMrMdhCMNixUvaeqTD9h",
  "key26": "5sKdW81TAwbYXpo7i9d3Ycj3ufpch5kmrDDKHUpsk6yffFkSNbA9mNckHDy4YWjMCNRz1WAcaNZTX76G5yCje4RD",
  "key27": "4aQp2VHXnAnm8tzXmp3TJfhNCs4ZYad7mvhM8axKBChXNznWi3gbSktcnJnbawSLdSp2QuaiVmBTSEe9Rtr4TYm7",
  "key28": "3twgXwYRjPuWeDhmC7aWBwKouNarBCJJGCjbjD3rKmrvooHudfKutLQ5ukoTuLGSSJVuJHFsWqgjpapmMQFKYRhh",
  "key29": "26jAvpXdabbZGS336mEM6xsdg6Kj5VAXBwQtV4oBtNSxcm5J7u292DxUAYz3yN133KCCZ1dASb3PGYqnJbUnTAoa",
  "key30": "uLwAp6sUjrXbUooGYGCaeBy1xvhne7GcGyxoykammgH9oLWZsLUXDicCWUs9F4MF7RWM9YPpqRUUeq4QzMZkrz2",
  "key31": "2xWxXD8SMuZpcEHQnBHRLGqRZNsX32y8ykZg7xMpg1haX1cvabs5neEW4SoqmvZdxzzbwsSbGYG6DarpRJUeJqzS",
  "key32": "4aFZRj8zZ6fCS4kuxMk8Y898YvM4vFAkaU2mXBYcNTV28f68Vrpvq7THDAcviUsjxeNRp8uSf6foCkwoQM388xTz",
  "key33": "5mpyDkKbcRUGqMVrpMAVvDAT5AUi8qEvbGJsPea8ggakehhZ422vqNEzqGQiZ7Fart66AapR4NbhJXauoyiz6ArW",
  "key34": "3sjtbdnnmCszWRB4hcWsfKFhcAMR2qJsjDVbAzgN7KysyB4qUjfQrqT6VSYGCCsYBd93tX3D9BQ3qmzddpJ1kqVQ",
  "key35": "27NcrDvRBftuXxq3ahK7De67hPaahc88W87VmvYfDhoUzCqrpnwVsPyzjAHtzLvumxdXVm6q1vbDmkYPENrL248Z",
  "key36": "2z6nRKrupV46rBZvTf6kNWhqNTDsTH5rpuncpNt1qpoTvXkaB26YaHpUwYvEr5NMjgFMegVFFN1jnkPHAtPgRxdS",
  "key37": "2VsHBDy3bQcT9XXTt9VzBf1H31hex1YyaLFYWcKnQXC4umGjkwv3cfV44jx1fpt1HVVMgKS8BoEak1grD7KuAjWe",
  "key38": "tkZeEHo5BcJzQngxZLnxtmXjYWCNDY1a1y7Z6siLYJYk9iBwcNsdH63xEHgz8E2TAZEHpvoibATGLavfKU1KvKd",
  "key39": "2AsKxxxvDqknEYAuXuwcr2FviyRDidexPgwFaVgLctnjHdqZgvi7YJwkxsEgEr2EcbHaQ6rGTqDfv7aixtgbpaQy",
  "key40": "3haHJkyGxvZ7RhxbTgAhfgrvYtSsccXooLVB7VyH6xSsEPVqJR1aWkL3n4B4vPJWao9HfY4fGSM5HPmjtPiCDfk6",
  "key41": "5exQVBMQQzBaLqL6LGFHxu4koLgq5UYbKPEzfrEEWymBRR7iDB8dX6wPfXdNx2WVNhf5fFFt6pd5br4yLQ7Dvi2B",
  "key42": "44qXmLUacG8EaLNHxd2TPUscHNEXke5WZSjf5RgchkjKD8taewFNJNXLwHCgaHBFrAhKQk3GKBaCuMyarVGsRWr2"
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
