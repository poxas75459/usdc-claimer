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
    "3ncpxoFVNiyyA1bXr7kSnPpimaDQLBPb5Y2udw6as35GnZCNdQFHNx9p6wds1DEoEXhzGuKWN5xfMa5ZJWwyEeNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A1PvhvwoWJBf2mut8YevFrsVBif3YSXd6gTPpXWBi8n5X34YeRu9Y91K83EBCASn4DgAGGp9pSCKcXUanqUGdHV",
  "key1": "22MqR6euedJPsniSXXNFq8MeTHHRMF2JqWDF4eWvVGfQfXaqxTjuzKme6fJjXzvn7VCjM5CCH1veMyBRcNyX1YjX",
  "key2": "4BSUbxYDSwQRYBBR4mbj6saL9nDGD85k9qy4ZaY6Fx9fD2ck5GGDDmx9TNULKjoo6JyVmEFhsxfDpHTiLC32mDpJ",
  "key3": "3tZtA3A61AwnSBMc5UEP3BiHVXCzFvcF7xxsGTAsPudbghojhnmW7NDXaVc87e3BfC5sDrBD2ueeCBz35QhRqZ5G",
  "key4": "3WuqdwHMmhJRFrVT5Ed7UT53wRprjs9QcWCNtVm1j1f2BXp5WqC2ZZaoGYowcpJ9JDxQzEJ3M6g8HHwjXVDTRrWb",
  "key5": "uDoXaSEiBdwAU5NPrP6pGXW2UeCGPXUoMwdVs3nxc5rn3rQPqMbC9gQGhvVkG7pzHGU75XNrfH1eEHhaS77RQzQ",
  "key6": "649yEn9aLZT5jLVuKrdwCWWQr3h7mRxVaSbuQVooYLMDwovR28dqLVRZurh3SE6vdtGzAhmT3aQDvALkSGoFtsXf",
  "key7": "3t6f6XwvcFU6YQubviFwcFDDUx6aN6GXKssFAfMfsPYgMyyoMbBva361BN7P4bB69F6YfLgGWU7pf4o4XMWhzrQ6",
  "key8": "4aQ5rinFnrn2PnjzgyGjcZ5GQshaWaTVcPmcs3Q72g3vY7ceZPo7Nxkku2Zg53z8kf8FqbbS4hi9TcQE8L2pxNUX",
  "key9": "vXPntn4WSQtt5if7GTUbGUtpzuvPa1VkSgra7hRFMJSJ42prVuY1KkeA6M7t3zHcqMa4BXpFQFjkRDnYPqdcFGc",
  "key10": "25PfS5TweMvAkR265Z8Tp3kcfrXDgAjp5JcAGj8gSKX7ZjC3VhCHPE4sWK87LqEuwUPegd2mkws4a1awQF3wi6zp",
  "key11": "4yYS2xdVmgwRR32u5nNafDQ71X3kyp9peAi1sTj941fFaMeRKMHRygUAjYsDKfKH77xPxfJNn45NTNjYLtJzvoZX",
  "key12": "21x6SxB5taDL7vCoZzWbjuYWKZJk37dZ5ZdmCokPbr3k95fDheLqjGq89gVt4BwJ21zmK99Z6HCLeANBTkS4Njyd",
  "key13": "53aoNvLsDfved1XsoFvuuYrYfSgTpHNriYELEUo1ytGzJQaX6G89b5tG4VmzbvahbccGEkJU3d5Vjq4RaHE6JvLL",
  "key14": "5R2jWNKzw9g58EF4X2EC4fnpg5mggZ4q5LLKPVB4mRf9CX3zqk9ZMVZYN6EfT6jttrHVcevFqf7QBPCgPwF2Z4Qo",
  "key15": "4WMEhd8VDgMhfg2LQkHBP8RRp29FJFykn9H1m9GHpqPJQ4vsqtTRLeVTB6rZVbWMymKzJPL5Pe6mF2oxYQfFYTrZ",
  "key16": "3Vw9QHyYUYvxjJwkJ3ovdjKQ7hbFUdtctYG78wbYRiid2fUopdtYFrW5XN7RVh5kCEUxcXKSzBysJgcxx1nCwsme",
  "key17": "5onoDFFuGmvajNq2CNbyevjPpqFKxVrHyczS7Th4YFWpa9RP1VFce8S2PfCFC2fSHZsSArDb2LiyQXQkzCSMDNjD",
  "key18": "VQPNCFWAvo6vrVSkoXTVNEXz3dsGjapW3WiFWYGweHinT4NVH5V9da3RmykaroRCvzSFxMzeSDT52iTEpQ38LBq",
  "key19": "3puGjdo3gtbjjbQDsbeNwugNoY8sH7EQdTBEeWmdDxGSMSdDVWzukrHABwoLN5dBiotEzE5XYGUQu4ZTUWUuW3R2",
  "key20": "2R8SwGtJX8z26YNpWW2gofzqCpgsKtH9CMEXHVbk4Ci73rNCJanhWFJjD5NnCzoZhXHYSizM6PFXg2dw7wfcNybg",
  "key21": "UsaH1g2eKPTePJMJG4w65BGThtVG264ZvYG8PyQ3uyhUnhpB1Dv3QMhAfvTHmWqgMjTa9Wywy58BPEPWt6GMpN6",
  "key22": "46T67QRhFE5BBWqk3sgrZVJt8gXGQ2qeEKfzLBDh3aHtuhnEasqEz8u5cLvJidHRBLdcR3E8vG3Rde2w68B2Aguk",
  "key23": "fXRpmyWrnZYvwUqr2bCqtPsLyj3jAXoHrxXBi8uJ7PUKezKieM4s2MxRdn5a7nDwWh2FDTJAAvGX84othfeXZdN",
  "key24": "5GDB5hxdwY19pfghPE8sj17xdYppJdpdyy7HzpUdYUn41mULsBVAaY9LcXWjdgJVpmhtZaULmv9z7t6FqTfBKt87"
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
