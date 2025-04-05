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
    "5FCuxmaTUG3hBtRSqcbrqSiPdwjtfBZjpPEfTNQpMivqwEfXSSxGbQYXaKhQDQRoxDUyKsUMZnKogRZcv4Fw4kkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hKzXgTQ23E5GHZwSnss9vvpjsSLpJ4pyKkdVHyuBL1dHgF7v6zc6kB7EUJVaYyR4PA3jm8o35zynvtGu2LN8SMu",
  "key1": "5pnB6zrxhGgRb4Nrdthc7ksMxKjsDyvMuJayJbFhV2yAwuu1p9wYgv8exqVuiyC8xxjkAi9h64ARVmBoEogJsyG2",
  "key2": "3iShRZBUHfzNN4j6ben4ZGmFe8c5wNtrZ25hPKMHuESJYLjkLPxr1S66cxjGtQDXpvpNjtneS9ci9rie2VwtDJCG",
  "key3": "5Wws82LT53vcuQFzrJVPsjA3hBGp66XqpgwsT6kWb8rmDriqL6a8C9jU2s6aD6PHRd8c4C6DqccrsQGUcRYHwhkR",
  "key4": "3q7ppx3dWKtdh2KoTuEuNS8VmU57cQnu6YR3UakHia1PMzaXXg8vSFruUV2cmVztjd2FTQrtQbbPyNA3LZx9Hph5",
  "key5": "4BC6nxM88jbzrgykTMFrN4vLT1VAES33cohb2pnfaAGDnhBNp8LzEy463Xjy1Fo49xCBTZDM2emjrKUyC8u2QaZo",
  "key6": "4gz9g3BLF3WZ73iS912EtAs4zDcFKD6kAb5ytskTQgEjzhDzPgwEDJkyPry97UaVeymvfoDqb3zXssbbPS6b5917",
  "key7": "3SHbU4bLZ67UWNey9ho4Fmbqkh31mde7U4eFBR2ntWKHwf2tTTNgbrHs72GczFtPiXQ7j2k1vtLG8dxvL4pegZ9K",
  "key8": "3ZC2Cs63zo1o6Q6xcFfBaiSKteKrv2wRabyCBfv4g9PRvnLidoDYBFiTUisknvabwLQntzZobhToeBG1yRRU5G3s",
  "key9": "4sepYXkPdeM7oRgLTyU5XbLKmd3pgRJfuSAuKsdWXpmgMGe7jNTiVNJuLbxh7kufekVdMKQ1VuDpYzVro5cQEhRB",
  "key10": "3371Suz3sbsPFmvbFsu1Sp9NVzagvGwiQfkbiKKmA5HFADLc27ek7ZW6CyvBAKeRJvJ6MSoHE5gcsfusKF14btia",
  "key11": "VmrZJksS7pQYhYxMowRLcecDfZaEewd5azd4wokERtTSR31Bd2hv9z3CLjmBQ949RwnqzrmkSxPyiEzUobzDxmz",
  "key12": "5dnzeDdaZoaSGdk93cxRXyFXFnZUWAgg5nLLjp5GC4PSqfmvLKLjXrAUFrAE1dAmzKPNycUKaQU8YaN6M3rHTaH4",
  "key13": "3g8Qs4Tp3fRtDhVnMqaBk7jXDu2DDYgxPnMcjbzKvM9mDpKU6tUnSzPCXQERq3EpoPCWzdk6iK2LdGXFXZAuG9KB",
  "key14": "2c9EF3m8vZiEq15jMDPPbwxcoXdSL4jvMxKBC2j3owRLy2jEMSEPvmZEcx6H87uYGbqz2VqRxFLaMgjX5s2U2Zoy",
  "key15": "3Sf9JPvVJX42AuiZcAbV8cdrmAjm4TyR34AM23ajePnM3NWZA9g876mtqUviWPYEBYmr4hMye9rs69puxusri26j",
  "key16": "4z5E7JXApRuqTbqB95DvrW1NH4cYSiLpstxEHbTyuBFxkGkpgUT4UR5mMPXrRZnuafdDtSm5SjqsW975tHjK1v8W",
  "key17": "65oE9mbWaq7erne6LH2M9nUAk1cyKBu94AESEKfRcN3fUuKUyWgGVdmCRpRhh8SaoCCbpxRo1kfLVM3RzJenQXeH",
  "key18": "6kA34LmLFwwKGq7EW2eR9Z7mnmHe71bRK2dhyRVHswfacQEk1X8cC3ZCP9kGAUAkStG7mEHj89kfhzzXAq263nN",
  "key19": "3UA2gUnxCGeSEw2WPZajufJebtaeSDW6e5ZPBdftLdivxGVJdGfWsUNi9NAnRRt4SM4Dq6nL5wCgV1L2iuDTULZk",
  "key20": "2HPPdgnZrV6owMt72wSbsNPR7TSX9QRK8YLZaiHBESfE9gutuRgt2XNwpSJ6Q372zVBoRBBpWWjpFnbRXxejgQ3h",
  "key21": "2kAbkqri84tU6W9SmwxJ64LfVV7tDMmGTs41ERrGN88LQPGPAUMhGGYhL9xGjYZXBGKQKx9YrR2JRdnNc43tXKYx",
  "key22": "24FXKf23ber7PfAFnK54Uu2miDPwLLJJZUavkxkBFm5TEVdAxvJR49zHctnKR8CZAdP2fMfHzXUqHqm1Ko1tUByD",
  "key23": "3P5TyTbieRXT2pqMU3oci1jxRPWpezecHf8S9N7thoTEWiBDLCS43Fh4jrCFYiHo3RZ9bfneRSx8FiDiZ5c3sHaa",
  "key24": "2xHmfhR4YnLwVQuYATMzrbxUHroUSty8v9vZ7v3aNDPn8dkGABCND8kKGhuxBjBTDgnQDKgDiQ4HzYfbncy8dtjb",
  "key25": "4DYAeQN6V2DRuZpSSGZFNAZTYevRmFkWLxrJSxuGDHAJmeyBAfB46uJeHsvLjWtKsKqKR16ctbZbi3PctBb6CcSm",
  "key26": "4wxdL7mALPUXSbQyZz9eBAnb6bekaSMQbNKa7Vt2T6SK5W8BJeLQNSV9RNjZVGpWZMxfSMYRNE5QtqcMbrmt7NV5",
  "key27": "2tBU4wM1PZTYJzfQnC2dGJxr9XmoiUP5oYKVH2MBwMLURnzmHipWpk3a8e6zhzWQf4r1Atq3JuV9asTyMJCB6UF6",
  "key28": "4QHcWMjvZeSyAhoeBKZJVPPWRYs5Uzuyff2utMAB8PyvSmbhVvqpjSeLRobgrDNbtjo824dZEugJ2UXPRQF93Q3u",
  "key29": "32xsxoSDvxitbwBqgCGQ2G971xv8cxoEAeLnhLCGe6KkbL6tEPejFsnwS3a6P6m1o9a3bb2ZoAiYGKrQempTzjd7",
  "key30": "shYMXjdPsr8EE1xehMiaWSSuMCxxKHw1AhFNSJbXLwjwmsq9bAgnK1njRNymcXAzi78gBib8PkWoT1zsTuFaS5T",
  "key31": "525VMVEzWwu6wBKfn3vBRmNqUZCZTfKVxMibfEUyNTngLp6PkoaKvFv5iwgLTYb6mfL1ryF4jzuTUZS3S4U9ZxX",
  "key32": "21qAvsGgGRKR6APm4v5qKjLWcF6Chshzp5dFCRMsteAvvYgYcRNsbiF8KXsvP4DwAGSfkAVVCsSoMQEy4sF1SCeJ",
  "key33": "4UGzJJWiETTo3Nie6DzAsd9uHqsP3XCff4vuDRzzwwMwFmFHDcKk7aHCckshHKT113pNekqEbkn6DZhoCR37Qhy",
  "key34": "5R4BCMocRrTWhwXwpn7XNoqGkWVvfUYJrgrxmKCtXpDj7h73WSNcnTZP7hoq6TH6sKDTLnQV1yFz2orTvPEeSAQg",
  "key35": "34d6vYj4mzioKJj6Txjb7zpFRqaYmNe7HBmtf8XNrYFxXyTFKbcLsETiJTCc5H1g8BcaT2phRxiTMHPE4bUcbJ3H"
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
