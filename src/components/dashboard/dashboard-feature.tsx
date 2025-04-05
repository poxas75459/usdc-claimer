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
    "3VTYMTd5Mdzrt8XJnMvTLhN9psJuBkFiuPfN5kyQ25CV3bVNqQjvMabbKQQucXpm5wxBmBZXTpAzoPeL13Cpya1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UphavKrioZdm361H4nuSzNNocBXM28cdV3BPL9am168biraCbSBosY6aZAZ7pvfeoi5SJ9x9h9pWGoDSvkwr9Qh",
  "key1": "4dHSKb5PRrdpfhKyNYw46nY3abgyLXY67yS8aPN1ZMRhQwfYR5biHdyDQuAPRNUaxjkkMG3do1DUAzuQZPwZZXKz",
  "key2": "N3rTvRZM5o145VnJhpwiLEy6peWCMqZM3idcXUwcW2cwpiZ9WS6rxfQe1YsU3cLHhZdZcjwcY1e2797yTpRk47r",
  "key3": "5hTNdxoDPCMUVPm6WyEYEXpGhktdiQ3KVHQkJGkFXRFR8a9sTgTnqHpD12k4ZyWdu7qE1RtkTbd99Uii39VmbdcD",
  "key4": "66AjAMe134fqyK4MEuFYFTWwAVhh8UhaPgvj63h3m8RHEQMudnh8jDcSCxEhCf9TJBCByL3QagbQ8dF1u1V5KBmN",
  "key5": "4bBBwXKjnQqWJzAr3Erch8vmwN6UvUGaVUJET2kYuGGk3KaJNZiMHwsmDugmq79a3nsGCp3m3sJvbt8mLpZ5kqcL",
  "key6": "4hSg6ueB3wL2VPxFHeeWwLWTFs9iukJbL6jkKBPnMgRvGdNZ9tPHXvT5GCUYb2DxKjKN5pepyZRLCdbewfhnJE2c",
  "key7": "3eU3ouzEdmQVkfqRPGWgRe3fVhvchJTS6MWwKKJ9qGZ6XiXtBm64BosfHWjCuiSiAnnN4pgC22S1MHrAUtikgEwK",
  "key8": "U98E45AhqG1YkAbTtgstrYbLq92mwUcPBdzHXfsVYK79CEupQ39k7LM6PqFHYHDX8FoxwdxRAsHbz5FuyMvD2H2",
  "key9": "5MTRC7iozcrmuH1JVBfuHueMqmTyF4MKqcMJ7uVm6BFY8zSDN4nDteUk8voo8o8SfVWZqztPkMT2aY8bUf9eGaHU",
  "key10": "4ayEPvBGYcvmJL2SJ9QhRWt5FhhU4FwEVBtFu1rz53o8uktX66SuTKZ1Qr2jy6zxeKFghjg2AKhLTn4og3bwA5Sd",
  "key11": "5D7VADG6wZG9SPDnnKS89VmPH1kme1ist4C3agghPxdCg5YP6jjkxZwW8Hw4nDBhmuhsYPZNyiBUU24hMtoVVcfG",
  "key12": "61ndzj9a1u1ZMpBtkTRpVZD14N3DBZtFLnmyR1httH4b7jtTv2TSniXr8Tpw4Ky93YKygt2DQoaGwA6WQJ8caEvK",
  "key13": "2w3V3YwHYFe1SFDjzWC7Z9Yp2LnE9eiYmr8hs1Fr5hDfRsb6S3yWF5r9kyBe56MjFAKFzmRjH113aXe5rQfToE2s",
  "key14": "22CidF6gTxfxzHnMDwHGNpy8xmfXzi5CxgTAWoJQhduVMTC69gGCzZjAo86LfWRC7HuTydocbnQXYcSSqz7upVpF",
  "key15": "4sQvQQFZg3JwuPfpdxPtbczo7ZtUkDRUTM1nbsH3yhFAhgZ4VEkKrS9C4N65p9mkbDmx39NLL4zXTd4d3zMs5Vaq",
  "key16": "4v8vGNsqQcXBJER5ZwcC3JhbV32ETcTQF2aS64So8jhFpyoR7VohN7dziaqYkapUPKBUpCvJ1ackLqpdDXzt9u1i",
  "key17": "UVVyNui8nS7KGihkXhQ3g3UiP6uDgtyFBdhyqi8Jy8BzkBJhKm3Ui4ejCjHptTkgrhmTguwemyS4omqdiZ6vszC",
  "key18": "3vkv7HGKMFwiHbQbLHftEFFWHZUoPzqa3NfPymEthyUobDGJBuBJE4bQUmtSzGqVNbsxgBPoNgs1go5k4CBeCqXR",
  "key19": "4Mc4cvosjRVDx2x9FabNcKD7p81UVCWxQ7faoPuxBuRqmujwLbkoUQvj3yL2U4s3BBiLWG6Af5Sr3CNZZSFuXov5",
  "key20": "3FFmBWnB2HEhTPzLcezZcQC6TWERHev6ShUwUKnPgQ8AiSTTbzmgZDDe8MCGa9W5ScJVKje7dxDUPVgm7YAFtJDx",
  "key21": "TMdVsRPbyRC1B1EMC9gaVAoh5dZeJAQX1dTMn1ESqsk11gUG2tQ9e5XMRZZt7qovP91XXcCBNdQ3U6VAEs89Ce4",
  "key22": "2p8vAWCHYDuiQUw6YBp1BJihAAkgQvEzmp4bRTeato2xqNMWeV8yCvndxfK62mHLMa7fQhoJJdpQqRNbyVyZNr8s",
  "key23": "UgaSrupintKcSELsUWDvR1sg4kVkZaMZ8j2cQWXS1d9EQcDG4r9SHXz83DG2kYrhJzjnUEFKqmRb8cCrMDZj9VZ",
  "key24": "v2b9rS6fQoABGX71txQuVsZqwrLDbaP7epFDrwJKNKD7bLkBs7sK8WQyvAHNvF2Qvqev5c1ffd5SyoW3d1FShNb"
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
