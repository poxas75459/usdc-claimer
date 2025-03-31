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
    "2bqibXDq9GJmDJy1wyYEJWcYod4ifuUPEYvYo9abLYzKDxCHGtC6qR45fsNzJ5WxceWjvMuHBFh76XkZuXd8wNY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W69uitYRUCepyCbNweXKXApRaiemj4tD7vfiXuRaaDFExAfgi56TEpHDc2AkNEi3a88FAFM6Gjqh6inNXYjkPUp",
  "key1": "3LDnxL3H56DnjTM6jVABWD1BvMEBcKr97yFppk5wUFQDRsWU9ed4P4dfvjRhcHCuhX75PnZwefWaYAjvpknda79V",
  "key2": "4WV5BtSxoizCEbXn45tQKsGY6s7HoG7xnTPSap2zZZNiBBgbxapLjoNnYKBYBxvMr6Cur5CJVgRxtJiB2rK3VM3e",
  "key3": "2nHRAJANKdg85Hmtprsey8ZshY3tPqUgpEqSdVrUUiXVLwEkcA5aJzQCQygqRmq4es8ShaQhHVtbbhBShtqAJCVc",
  "key4": "4cXCyaYy82D8MJEZFhxeB6ViM2r7s2FaCKnBVeV5w8edCkPQymxxnfYSbi1BJZD8UBwXfs6DtVCgA34yVnrvctS1",
  "key5": "4oX7RtKg58mHw81NWT86rPKJHYvnaprZh8tBRunxoBXReSS7D5rqxsXY7kiCS4TeY2szDBCoAvy6rxArH1bCJ4sK",
  "key6": "4VfptCnf872ybFEtaGCNzhEGiyz7md5GyyAAaWTon4Brsbk1CcaLw54WjF1Xwzy7KizjLkE9jSQQSTAx5Ec7jiHU",
  "key7": "4YhHtux1MvZhuQsXg36N6woydyrExigzwnqzvhjF8bmGWto5X24qDMGqAqB8VNxdK8EuWJ7kJVJscKUuwMGpaPoc",
  "key8": "h2hUi2dYcp3mzXi3UGftf2MuLmEXKx3f3k44ibUFDrUx98euwzu9Z6kkYHuxsYuXQ2WqaeGMh7ZQja8XbTU4xPs",
  "key9": "2t2trCE7w99eTcXgffcbEktzPJRRUktFQBuWiwRsc2nC34VDXkNKYrv6Xd5JvV4oftwzd5SJLdrHUEZHLqio4Uhi",
  "key10": "vXReXn4YveZ6tXNkY14i9ZddCoZCPXJMHedDe1jd3LkwxeKVwQmwYvAXqaSL64hE3fgFrRmR2RMHbXBr2utDPKP",
  "key11": "64XAdcTaVJJrz1sCymMFS4TUuHQMAfiqRJLZHdbuUdQpW1crEpFt8eisxqRUcHwGGG4pUhFUSJCPoJYndDUQ3rT6",
  "key12": "2MxtD8umPkheqCkAh5ojQcFpuhXAAw6aAkAh8hcyB3sidYfrqVWZ3SH1CgZ29uFQ9e71YSjkGH3A6bzz2kmmFuHF",
  "key13": "4mEtTEKZgVASrNJWT2t2Edd5CMscyMbhXvSv3ADpBuPMryPa5FWa6CHDoxNL5dgJDpmf3ZVsLVR5osJwh22FhVD8",
  "key14": "2C7oZfzYuQA7srRxaDpyovusEtUaDbf4TwbTYc3WogEYKtX2NzrjsC69EAS5iVZUCgsQ6wN96tEcEWdzMGHmcp17",
  "key15": "huUXYx1KffkgmELuQfTEy4A6kZNsPpGeBk6AyR3mCPLTaT2ozrwQRsxLxrX4feFKaLgSZXZ1wDk1BMM89wBAma2",
  "key16": "28TQq7jvEKmoPxiAUSeYR19cjpuRZEDi69fjGAvuYNHwZEozgnT9dBQsSu4Lt8N8tUFFYZo53JHoivLxARUnfjwf",
  "key17": "3SSLNByqiC32GBzJKZLG9Gjc63mt7vDomQDDP8nmhjnYMMPbEB34jDNVFB6N18fKoynMSFUmMH3HjVdcP23DDaV6",
  "key18": "cWmpoBDDFFFUa9Z3YynoTXw4Dj3N58Gud7Np2MJidj32fAsR37ij4MxLWyJqWxkMgnpTarGZKRRoNZNBbbHVWjT",
  "key19": "4iMDxdqcACwBgYP2KDvPevHQKHKevgjEddpQYrk8wfUrmUwKZoNCCnLoJL4Vt81UCeTDTPgKpfALhdSxQ9kkn7mc",
  "key20": "Tz7hR376CZSuvLA9SieTF9GBZkjn589w64u5521AJYMttpRsttYYwU4DwYxJRZWhFATdYuZet6Gvw5zYpLHHd7j",
  "key21": "2N4WaCTzFK9aBaqeDBm5Yt6vr1UVERhvj87qBeppBLs8r8BNrWyLG5vKnXLJvNkV8r2rkHo27owab6cacRqeT3Kh",
  "key22": "3CYVtpuyeNu9k7mNpDvQw5Y4Ri5QK5hEf8dPx68PZCqCbU5oWkW75xXYdU6aTeMP9Vzs2hSmCuemtXvSHp1BnqGg",
  "key23": "JBcXXVGnrxpeMdPcAYZAjVzFetjobNGnSCnMEytqJKCysuhmTeQ1n3YJbmhctML4XonqS9XiwVYNFfQgPFDZgVg",
  "key24": "56Smopa3JWZx5fvieQ2kVNsD2vjLXkm4QBM1cDskmKTbQwZDJwp45MH7zEX1SdmE1z83QvyA9iFqMof8GDzWkkG9",
  "key25": "4dVxs8iXGThsT3ARo8kTnoDqVFPnb3rp6M2jYrqQKpFQuPoUhdwREuWiRC1CsETH8ZLksdkyFdon5ptr6ELtxYBN",
  "key26": "ddU2A2usGK63Z1XNhi1fJoiUuFjbfAzES1j4YzvqziRV5pG73qKiZ7yTL5n8WLGX25FvdYNsnacjjQarjF6xgdD",
  "key27": "2p89AyUXe4ijSUytJY3xevJVU9k8oJqtaTSmJkF5wQphKeMxA35mKrNF8tUYyBLDpqXrXkPssj1HYiUnkZF9P1Ci",
  "key28": "3yPCY6AHRCyjfnrYLRNhiT4MDdZgWHiWWMR2eW9bLGu9Wx71s4T2hqeAX2i2Zw3zasuAbiB5zb15yBN4wtPuX1KJ"
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
