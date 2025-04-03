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
    "2RERGQfaRNSBLBcUe1fxgHbnvJtyybsSWmUVmDcRHVFb213yzZFfcHk3ePYt8fDhNuZ5Pyr6qsEvA2hSV6cJdPJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36fPmK4JZbJR4Q1Jpwh1PM9i3Cip7VdgKGocvpTgxLjQ7HdoK9FU3aCrZ5Cr41yMvYhsmURzfvaF19q43vH1T1zB",
  "key1": "5Gh3kLP3jzbV9KPu1fF7H29h5RAG36XLhz2R2r3xaSWReTnLxrFKa6edgdSYBYH5Xx9LSuTdtKj5fGVRCU4hk7Wk",
  "key2": "3Q76uQXW4hGMg8cnMan4mSpcH8pB5NBi8LmZEbY6HYdUVyZc9a1ef351WePmviozhUPJYjxeH4dBsN5PP65RLzjZ",
  "key3": "4rxQKh5YJBKFrsxumpz3rrzN4vRxY69RcxQBwkMXZ62jwD7NRU2ixn8yjdTCAsSXaM2d3rkgwBLMwYujZhkb2JzD",
  "key4": "3LQpRBwMFXVKEKWmwt8336vLMzCoM3QLJeqKHakp7WFuDpPQ7nZDKCXutsDUKggsZz4bjWjt7qJPA3pVpMcvYUzr",
  "key5": "2hxXRSXJMKNZNuVkpiMsbdH5qwAVZCBPuFf3tWU6BqqjZVXAEbSjWndomaR31ZvYRoPYZGMuux7BgjVdYFbVp3Eh",
  "key6": "xQRWGqsD9At5FiMFUJq4MGa6aKsCx7HiYc1xWHW4FACkphgQ61m1AjxZjhuAf3cCPpnC6ousdE4nRw7BX2dLGfH",
  "key7": "5RJuHVYVp8ufapXhSu548TDbxZvwXNyGuPkQ2QpcEqksRpaerQv6My9w2wRcptczQ1Mo3f2z9F66X8dhC9YGQf3z",
  "key8": "yfBpicnu9NoU5SPUa4TFutkge7PfcfaYwnDqLLcbbHgey7qZb8NPB9E1w3U9bTaTLLPnw9faMfXj3EKAhuX5prB",
  "key9": "3JVr6L1sMvqt6YbAwWgnvVXfNWGVwqPj8cYMFGpuapL8VNh5eFa4KKQUrZXRiu2n8h2oE4imoSGbQeuk6AXbdXXh",
  "key10": "2Tuv7ESDQrfsRx2TX8tFKY6R57ERLdZz5jrkG83hbk7Ww126ESRZAE8LJ8q9VGJDteN7hrDJukvr1aMyxXyv7Pmx",
  "key11": "5fM7cwHQaaGUyTxWmQHHcc1Wtoh1fp9JgGVCUvudTBNbbFzmt7RRYUKTELb5tPw5BrT2Abbn1URuX2GekyFLWGnz",
  "key12": "4anZwqhVcAbhJu1LEPCXzhhDRyRJUFhLjxvHU9WrZbrJTq9cJTnhp4D6gSzYwPLBbS2EJUnrBKcRe5c8fmGAn2cN",
  "key13": "5qiKEksVoWfDq87HLrbd7SQ99mxXojkRUcGsm9LX1TdNp3Y9KvAKvPawYum9xr41U6ZPfBCkduvkNwXMDy6edjkw",
  "key14": "2NPpd5vM4N8nFSYPmRWwz29DoZ1Q3GEaKEZJ8G9YGyW6u1kQUN9cP4VLNmkiKAk5pmiKhWF7EFtjD6mYscGMNWGu",
  "key15": "4WR9vfoTWyfGhZD6Mm1ejtV9Vn9U5Jj8ZwVCfodURGscSdPUEgTYVTwcnSsuRksqKdFNu6hrqusi5qdxjDbQdfiX",
  "key16": "kTvCb9dus7C4TBHRdBKGmKTV6EzuvTQ5m1XgNSyZy3MLdjAstQZu4U5Z1zebWfrvkkdJDDGPZbVKhQ2qt2Y4rAf",
  "key17": "35rWCPEUqoorAzyJmxSpSCDJUiSjPdDHqjSPM9rL4nctbFNwRUuN5XH7FUrhNygR2tRUDNiF7kRN5ozWD49M3Y66",
  "key18": "5hrQnB77VLzrnTW7f4tnyMfM5KDU1CaX6b4MdXm38xkxvQBA8zjdHetcwDV1Vm6EgKfjFuJFbubqhUUBgRrZr9Th",
  "key19": "3rHqMSXpNNgLXRzVy1FQB1JrpkcZrN3s5FtP8ZXCPuJ7vkyvhBXHwb3q6qeWBg2qTpXsmcXHXdPeFxiKuhWS43k1",
  "key20": "7ftH6LMXN25pd7ipzebWJGwXv4sFeuQ5fV9L9N9JxZqNmZb2QojjNavqUrrzxpx8qeXfa3mVe6HjL9you7PLWL6",
  "key21": "3aqV2PkGGKH9J15VXE8fd4NXiQB3nVSQswuZBY9UoPrX8BBpzrrXs665tVW1QRMeUPu6GeXm7KsYKMG1HeHV9DKe",
  "key22": "22hua83NYPBjKhxFBqLF5BNzjXqCGfHzzgHqmRhWUiygJV6cTkv7qvZQqHKNZS4z4FpXLstJUDZ5WMN3zB58h1rE",
  "key23": "2Gi5SwX956bXCYgFvdSXKuZyK49mbuHWFND571jp33tBgX8XmnhMtF7uDoqPgC2az9PzJq43jmiWKptt7Vu4oKm7",
  "key24": "5TnQd3LtWqcJhNUiXJkdPpcFLSAKwJcFbfX4vqgWPKAMjvuvLkLD3UMbAjvkqc679mxYWEiHVE3S9fUvUe6uWn3o",
  "key25": "5REjWfiY8mRfqWyGn61TAKcYysgT31pcJ6jynt44xh52ANpvNGz9BYPz6hFimqXyEqEHuiUdeMxFWxauF2dxH9Af",
  "key26": "2eiM52R1iEzcZShrDqJ5C9tjgvAocf4N2LrENaDUFiFeF57dWntbtrdNkenxVzQgJybfxHkWgNEzbraQoeATMJ9q",
  "key27": "4VYzDr3tTPAvXMqnaGo4tVzjRL2fpwPsrcdP3tkPf9mqEYAg56MCWEn1FKUAe8XWB7pohD2cSjGfH1CuJPixCpJB",
  "key28": "2kmZmXupzeFGKqdqhpgejhx2LJe4Yi9qDPJxmGSJmtvkCXNaRD6KrEY1AeYt6W8PEzMg2gaZ4REKnevbr8VKBrHp",
  "key29": "5fcywu2gewySnGk6gTjJDc5jKfBWTddZcD8HvN7sabgXv2m3JAkQrPuJNjtG5JdHrZzPt8BpWUhcPrxm2Xxr3ZT5",
  "key30": "BR2vEmtpw242XsqWn7Mqn4JHw92rZZXeoso53N58RkKfANMDHwmp6TYWRRbnxoySqLF5S9DYuYkptU7o5TToNQg",
  "key31": "2kHh6axy3Bk9bwoZvq9S68FciCXpvYDbdbvNJccLLM75Atc3to9vzH1JzdraqKbJPWo3vovbuYKU3tEqa6hJqaNN"
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
