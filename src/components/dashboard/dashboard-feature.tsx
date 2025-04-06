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
    "8mUSfVDRJUy5c3Z3yrc29twmzDbc2Em5n47byxej1AHHp5hS4LbDdRFNYeCY7ALvu7XCNK6c2u9njRs1de9QAp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53F8Byt593tACbVMgnmmWPYdKopHJqSoUaSo5hfJSPHDonpnZCFbQomsmXz9FxEXt2CU4E358morgdq5Ehse1QBm",
  "key1": "ALiAwMYmMkviYYVqtxeT3gG6ueYuXGjWjF8ENhMRPg8qtYhjjLhjrY4zfkLBxj4ke6EzLNhan6PeEzm1PHvGMZo",
  "key2": "hpcTET7VwK2nB9KpDKVec4cuMfG2TMaPdVtK3w1uYXPu7m9yhCBm16Cm9EFrqrBkXWaneiJvvJZXh6rJ1ByRMnE",
  "key3": "3bTY9cjx9H9YPzdC7xKrS3GEmZ1NpyzYMYzwvk3VuNLzKRsxZVpYrPCdWWBnA8hkqRwvVSQnSV3wuuf2vk9jYnTW",
  "key4": "5gqsEvau77KKHHsNy2muMsJKZ2ii4aXYhNN1Ar3JEAji5HUYNNzfMiEKi8VvajpS6AGVZhXJPGzAXhKHRd7N1w6h",
  "key5": "2gKRsGcmvtZMvd9NFUt3XnGXqKPiF1xgCcR7cQyUeYtLpM7Pv4bhY5qdaK9fPdH5WPdeW4N6dD5aycKgdu8CpqmQ",
  "key6": "3H3eapUpfBRzDd265zywDeBe6C1pQQYpBkuNqUMSvt4kaSHd4FVrHocqFyguj7mfjt4J65YBThkP31fAwDLVxzCm",
  "key7": "4obTzobEd1CNFd73W1BVvDE8f5S2c6jCaropixP7at5chCTL9bgTRrMg5n5eayDtdUuLrrP6AJ9n9zFVVNcpvgck",
  "key8": "5pwNdKVoYH3M6pAVdm665B66sinocCWNpKx8Cfdq3s1LkUFRK9bizWurjVpuEuWfJADxc1ZiGWyYZBeXCWHMNdhN",
  "key9": "4sRoyP7TejiYYzmFxrj8DQd2JpFz8FKAtrDhjRjzWzaykqtWrK9HTwPKfWUTW49e3qXnxe178rGchimE6CeKgbtE",
  "key10": "4tkfrSqB9toSF63PU2annDiH21qT8hcLZ8wFCLBPKuyVa7BsNsynBsUtCDcBq8QUfzd4HykYTEouiz76V1dWN7Xo",
  "key11": "2osXD1wDN8v6a1DX8dvad9AKdu4vbR1fJh11izdS9g4oTMUFET1kqJhxuSJY1rBW9Sjd7x3BzSN78wBHbNvBVG6i",
  "key12": "5gUv3e5RVAk3yLGMn73eDSGGnTZVbim4jj5Sb8f3tj1Sp4GgYdBETr3TY6EgwTh7uY1z6QAHrBgeABhBu14WrnUv",
  "key13": "2MVQK3cEQcdRJ9MyvbHXgmBigFEvkCND1UccWSVj7ox3Ff7jt3LobvNfxPRFxWsV5uSk9Bj3WxCzzbtYV6Wop5qs",
  "key14": "2KifLy1vUxjj1ehiw3DyGZ5UfMFQoddK5ofC5oyrkyXj5c7JWJ3G6pDJGLyhCAQmNjZNaBu4smUm3HcAmKYYHb2X",
  "key15": "42fMsMEKDcfSzD3Esj5i56kXdax6rCpd5uAKdA4ET43Pv9iLFtwhicL81xtjVoZJGhFjCTZHTEiKWgot1VcSBbj8",
  "key16": "352nHAoGasu8eZpTSDijh6rHnh9AAo5u8m9nsDTGgnx36HEM6vcXaLyuRQV5t6czhfdxN1N54uLkwQob5qpw87wz",
  "key17": "4TWyWUnU8Pc2PXtGzFBsMN93RcdA6MmJxU3pkiCmt5BAPYL8Ps3Pbzc6QKfrGJBo7CrY9fp4fw1Bw5LJiMsGCQ36",
  "key18": "2hEmZr3px4EuEGC6Fb8Dv6vDUux6JQcnsgDp5DTFhaKDuB3LdFBvSZvmVibE9nV52FpVHaRoxaAwMSqMg2w7tR98",
  "key19": "2yXguuqhQF6gLx81SJnuXHNjqxxTrFVST9XbYhSakrjgwxXYrRJf27wyUcmfqfYrGGrEMc29AwS5AgCUe81MfRGR",
  "key20": "tB7mj79FdfhHY4tLXTiuiy16seP1pbqJiNMRgeor93bUQpU2ywh9j7w7qjcCWzsHCn856z8gYAhgQXBUsioN227",
  "key21": "4Mo44Kf8R2QZiiL6QfdvP5BLhmZbgpxKPvBBco8DCCmvMUdUhp4fqUkyMshAHt8Bm6r7LJM6kSrr264LqUcCLVas",
  "key22": "526PgdiUtuaX6FyeN7UUG5T1S88hBVwrrXVYZg2P2ztSHJ6sxmfdYknUBg6GSRxsW2Xpvox4NXpT4Ld29UKN25Pv",
  "key23": "4FCxzmK9s3B3df2kscDYiYW8Mj4QCvmP5fDphejNtCSG3nrNC4b2NNXifLfyiqjiJj32w3sffgDFU73BhLSiPJhY",
  "key24": "2NfNwG2kK5jW9jZFEjtrXPeSuygi3UuHyC7acUMak4qGdXQy426w9US72e26T43csoZZUPDL2uqkQHNzyNPmFsCY",
  "key25": "3oVcGLjJJNq8TyJh6sjK2aQc19FxLEBUvngFXmyrXGLCvySKphAtyvkNMi5oLXLyu2M2HmEDCXBF1ySnUXy1aDji",
  "key26": "4EtuT5JPwsVfg3n2Mrme7TNUAXKBSacVHYf9kVqgue2N3fvUYutHSr2tNvNMyytdUZqzXkt3ZBNBYqLHpohGsY6w"
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
