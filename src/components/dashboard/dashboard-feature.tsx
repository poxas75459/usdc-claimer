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
    "5VZmwMdEfbwojXXYG87epu3VjzHpuxDcN94DGuUi8kVZsoa3EYXaWDm3iS2Ea9KHA9NLiPKS9Tbi2bvjWiDjpTLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r1Xn8hadMqvYN1YhqHUVXRFKSaDrt1geFgPAA4JBEZauDiCRfdjM6NyZW22GuQyRhPymwSLbtkWGU2m8PjeMxw1",
  "key1": "2hQ6E7pkjgKY2owbu4FaVFQCSKTXjaKkSwbBWDtbFNwSdDYYsaJS8X2dEMRQFjX6s9Dhbn2Mqrb1gGNNatdbYtSZ",
  "key2": "ZBf98NQVLC861Ttsu8X4AY8Y1EnB5tTNSwfz84VR8CmTRHChDGPKa2ZNLBM9RZdYfZ1PA6okAmPezGJvEePaAUc",
  "key3": "3K7d45TRbmtpq5RX2UcjdavXJ14LoQx4bJ1RkcRpwsrXs7FP7drsmmi2DJDdgV46uNR1xMr6wU7XSg941E2rL8Ka",
  "key4": "5TU1hvrUEtmP4zkpHCbzNmeqJhgQSwsz74c5QrDxBWhCk5jA2dR281QxpY93n129QPGxh43rw7pSTCVo6aL97F3k",
  "key5": "koW9jPdnMMmgCfX4CXGyCQc3giXeLRNuWTXKfLtUjFyp8xgGSqWtnZ719PX1zTkXc3hEBajHshMb3jLVTZgcpnA",
  "key6": "4CA5c7t5mVggCzXE3CMzBE5ZuFMpRm8JEeBAefdWWGCjijK99rXkf34sKXzveKaBLSH8Wm1i41EMXtDLWAHEoNEN",
  "key7": "3qmfRQsqBtRTKYwhSwicT9XvR5CHMVeykxv4t9TZnLExaMN9zz3C9fyCfnei66AiQnHJujmvK1cfuViRSCbzeYhM",
  "key8": "3BAP93YysYj3NsHjrz8ZexdYPpe2xoGjJcDSjWKA9FCksBffZatM2yg2pQGcfgGqwUYgqQiQAD9PJCikzJGc93Di",
  "key9": "5Dkvwncw9CLRVwG4SDxDcMXGoCEEcPmPS3dTPKa5w4T2RbvcV1sRv8fBKbDJmkD3ADeGWtibK2WeXmifXD53DXnU",
  "key10": "5eBpdvYxcYMAAMrqKwCLHTfGwPVcdYCgsd17kRSvCSqYrZHsogNzESU8QCaVAf7qehWSXk1WckJnpMnccMXXPbqn",
  "key11": "4BZpDBmbqkX1nwdec1SM7HQLCgqChiF7NyrPgArYmz7LWYPByqz7KAaMRFYkwbpfPcZXHQ8Jm3JAnTmkUZUS7Mu9",
  "key12": "4wYAtPAP2jMdpnbhmuMkzognpRUMuNqVNDKJoCuWnZ4RAPVyfe1JZNqEYfX3jWqyWYCSQHRXJ9DDnEZ1G3Und7EM",
  "key13": "3bNVaaUNAxY3dzYsXvN4idCaknR2tmxQQMvzRfiXuZ7YAgDPv4AAGNF3NjM5G9y5cyrjHHAkwPetpfJV7umk1opZ",
  "key14": "Xmt9nRzZ4MUjhJmJmCqWGwCdGTj8SxXjzLk3s8tLiPfYfyipmBuiHzqf8hFTKSRexkwZ4WYwx8CBUomNYBKzwTr",
  "key15": "5YBMv6YBbDCix2Lv1ov31iNgpZz2t72cogwda2ymsot7ZvyGotq6HnpQRfCPnntn5LZEyc2E8hkDRAGxyuoJUR6b",
  "key16": "ie24AJjcXdAruUckAkMjvdmzYEwobLTrAcUvXmekKESmYD8Ltav5bDtggCGcTcyHGfBVe9JzyWnLK6n6tnCevuZ",
  "key17": "3ZVwoPwfHMk7x7gchQ99C9ZZRwVo4LSH284NKYkAmAcytji7KFaqoc5KELPVLNRebND43Lgn321PGGEJYz84XimV",
  "key18": "H9TTDEjYsTaVUyCUgGT7Y1N4ymYPgyocFQdWv9bxyURgnSaA6XzXSXRDGw8FJfx1sK2N1bigt5AZVpoU8DFUaKJ",
  "key19": "4vnUPkTGEBebXm7SqwJwF8rYdpekz5igVN2yUqGQhKvjgWPCwBBqo1TKURVy8E6JWMacPTNmbgPG4SpqWcGzRaem",
  "key20": "4JR2Z8Z9hZdULhCAaTvNknBuCd8j3CwMKhCYJ351vkMsc5vLQLK6Q9ALeqwVkFrqrD2a4mpox7LBeujmSdAYMwep",
  "key21": "2zh48VxPPsqW7nkcTipZ3Bi3jgAAXv4s26dBfUWvm3qZrmvp7yAdGcGtGxRSrGeZjX7g3BpnPWmRFUsNcZi1oc1L",
  "key22": "4WTsVUfMTxAwjfJU7XnKcCDhguNMmQvRYRRteQJcavTnY4JL9ZXEVbSbN8mHJtwqfFsS3omDeHDjrACQiNBPfFYk",
  "key23": "4QQAE4zkNPwdgkeoCcDCSVr94wz1Ux6EPXLHQcaW7FVx5ZcpbAfNZCWHXVh5DXbBSA8dHonU5XmbhqRajZwhcLke",
  "key24": "4GLumUWGmgdStxRghfSeD3es3P4vWTNNuozvqsD35odP7bgpjoEpiL8iyHB2yHgUgCJsoSBCvNzzEm6mUoe4auLo",
  "key25": "5Rj3K847ZnDMTv7LGiVh7u38nHqgo6gVVRoQCzLXZcot5VBFh8s8TWBgUQAkE2udQrJgH7JHw7L2a9ifWw6rPreZ",
  "key26": "4MweLr4QtsT3JpaKzBSXZoy1am7rVTik5DtAcRQ25Qj2qiCswon4GYU8KywKBDpBGsUCHiQCV56BuWs7pT3xhZsa",
  "key27": "28L4szqJe93ZHp9sDP6ytDuRKg2f6zhh4toQcpStNTmzHwLfMwVhYBv4wUGEthKEs5CnjVwPUTyZMLkzL3CFufws",
  "key28": "62YsPd5GoZ7TZMzV5D6y6z69feFw5cZwtAbgej3CmW4PCUftexEnmGFNEzHFb65nHntx6pMsczbvL2sjTpNru3XT",
  "key29": "2DhB4fkeYkH9BYhZNtBAN8hmvWZEwkSMTN4brrrnZYoiDWvRaEzkEVgzSNLzS2wULCWhDtb9W8fDoSe4D5XLyAUN"
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
