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
    "5rDn6cJKtCp9XVUFBbZ7U5bjQxxjrZiHbue8zZfKPidnzxQ6vTUhBYSyeNXf9NPd4TjknVcz9i2CCrXuDRM85hBY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sP7YnHQfQ5u9fJpUba5wLpk7ERzVF5aPC2VTK2M3cbRFaT9xA1YFaUPWLiCqMzQ5nxGa2R6eicLWMxHDEuVf6yo",
  "key1": "3HVpcWi6DnFwjfQsgjcfpwNEHbzQZ6j4yVXdTKzqhfx1cks6ZULRS3PhYddVPEqCkoz5hiNfH3Guhcy52ckFLv9Q",
  "key2": "8F7npN8qtSi1C22Vd2c7EtNYCyz8AGyK3JLVTCR3ejHawa9VT8G32F1cpGwv1bwyvJ7MkDMy2PaNQ1WNfL8kuzk",
  "key3": "SqzdBCncKqSH78py3QWgjpW46VzpGJCr2c5Wib9k7RnqSrQrfvhFeWFqALvhDN7cxJAiMFWipbMBviRYMSQen99",
  "key4": "5FiqE4nqzVPwfaPUhLqj3qaU7ivkEgc2ykqc4HYXuNm5GyhwEhrLca9iKVuhye3LzpQ5ixEzPo7LiC2myPBSMGVo",
  "key5": "5TSQ4tEThWgTaPGow73dP7MiawvAxiLoRvwwWKuuJjCxy5tcvB2amvqWdrSdL6Wwi4szrG6y6zgwHm8nUq14Cev5",
  "key6": "2dCBHqdXvLSZUbtC2G9Uedb2Eh93NeSRgJTUsrcz4ZoHUtw5XiD69sadwbgR8zJAHH9Ta6bS9KGnMosNY5TajAUW",
  "key7": "5tSfhySWqAp2Xw5bWD5Jx7XcWGLiWnkM4EiTmwpAcXhCVMGvnnoB9L22yMXj91F1F28fQQLJbNe9whPmQKNxGa8C",
  "key8": "3pry6EVqvZARDUwKAGUzKSy1APBeok6A9mCSNbgcjygtEXfgTgfWFhTUEn2F4eMbUPmJbETKhkPbXFEMV6FvBate",
  "key9": "7g5uSnaMZKcSddyJMiGkuUELwHDVE99jVSoxxZX1rSHW7gAJ2E3MUxst9tJEHKxZW6DBQwRkMSBfv2Fu7vBeF2k",
  "key10": "5xar7i8bKhBkUh8rX7zSUJpWqsnUVrED1vkxF9XQBxmVT8wrar9TGfE5XzJaUzbJotPB76EiusEuXeeut3yo6Ebg",
  "key11": "5xa7C1RifZEQoE6mYnFb4hwTpjopAYWgEtqDjqRpUpVtfQKBd2zaBuC4ndaoSjth5uxLi2vMZ6oSiUW7DAx4z6BP",
  "key12": "45LmuQw5FWd6eDSkQt5YLnxcM9q4K4iyoLv9nVqo19xVRVwSUgAoRgGwMpzzByRYw3qeDmDHsqLniubUvgEdPUEB",
  "key13": "4WcHEuq3e8jz5sbBdJMyVgWC3dQ6Cdk2yhqv9RDARNVvPo8JZefZmeyN1hf2eidc22NZ8tLKZvpLsFeTeYAJWeon",
  "key14": "2GAxF4HUPktsQL1hqzaX1PFbd4xGCbuxpYWJd7P9VvcTjyuJvvcENeKz5tnWvU2yqT7fjYto9JthhTJPe3oAJzxK",
  "key15": "4vtFcyanLHCXMQMZMLcvGuEBMDPKkLH75YnbvDtkdK5oUAowqQFEBzXKbtaeyCiCq288qBgFCgyG79bAaigdqw5n",
  "key16": "3f5HEvvCLF5HWHniFYfoTVby5LPhPWrrJ2f3qSgfUchNZjew84PBSSBSmgJeKGHQ1Wc7Fix7oTJqmPzSMnq5onGu",
  "key17": "3zVNmAf6uFqcnECBzrKGdjGStbwP2nYLRXKE4hHz3xHdFqnPUPUJsa5eum7tY1TZuYp1uiDdbM2bnm632fJ8Hzn9",
  "key18": "5RzUJdx9GVcsTsqtXLdcq6q5vY3fmMYqQsMaJ7WyHufkN8STqEbyscwj3Rh43CDphNEWgZwcJT1UdUWhUjqkd4qm",
  "key19": "3rCmAgWHYpABTs24aMXz4G3aiCsmut2u6uxdofC5nhsbePLeDGpBw8rcwvC8iPy1JqiykdMNKnF1VFxfJBHkszqb",
  "key20": "5YysYLvKedWANunXnrcbo3KYBM5dXXLUgFor8MwR1La7LRA6E1MUT6qorthwjvnLtkjninSgPeYyW74y8ghU68Ce",
  "key21": "45V9n2gcWiLc4htZt53Vij9N6TCN58oqvVAQkYh2jUGrbymR6Kb24DpN5nyxhL6BxZEfKGNAvH2o5gagHhPhLJa7",
  "key22": "5gmRR8XgasgePTGgKJ3XDcx39RiEYXq9sEcztQXJ6uTuK46GtFCysKZ4FXMXUx4n4QRHGdH4YDKevxmzoAxVvodL",
  "key23": "5mNHArBC88KUhVT8rXRm4rKysQsChVRVtAevUqDDxUEymU2kiyxcBcnHRGmGk19wH6VpZzJPTa7S2aBhD8dc5tPK",
  "key24": "43Yx2RbhLBppenU89TCjRZxGCYqvHXdurByo3MukYiUAtuBPGHXYGv7ecsSEm7YkuQCWBb5UQ28xe541Mqz8P3Z1",
  "key25": "5rZetV85fWpABb8fFwmmqPZutZxBKq6aes7GYr3KUroZvzEYaVvthhuR9dsC1nqN12qWXCo5pRQiogkugsZgUFDZ",
  "key26": "4Ww34msP9KeK2BiFkkm5HFdAQdSoJRr41juVqqhDt6XXhYzvmJPsx6KuYukj6tyYYnsCJ86T7UvMmPGMYjedXwaN",
  "key27": "4aQtvtfQweLHb73jSTUaXoNU1Ls9sgx7PYFaoFQ2qDoTQ55JXzDZWdr9UDbi2BWG9kxPobMTYDDw6wmDiYusswSa",
  "key28": "48rBaRFrAo8cDonL8FPos6f6QtqLnqAEGKxeCQbgV9bP4KvKKPK3ATwNSXfNWs5th5GF44op4CLdsPyVf92e1bHX",
  "key29": "2AjxFnMmgTgxAYvCvFPr9SRD2HN7xGgMr5DbzpYvV1zjXSQxgDn1y94JMkBJCGHKavD9UMjkY5i65j112aTtxn4s",
  "key30": "53FrtCCX4d9wp7eFXbu1Ut3zrQT77QS776bd3J7o2iKm8ihpkfy82JxQkuCCyc8M2ZYSSKSqzXLtN9BpMsdfYJEA",
  "key31": "5voeZk4nwLjpf1JMb5ghi6dk29UnFp21kjGj3wTn98QLdZ5B1PTPNvW1JS7QdaTxXsPCjo3YFZkMpM6xNsAf1t7u"
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
