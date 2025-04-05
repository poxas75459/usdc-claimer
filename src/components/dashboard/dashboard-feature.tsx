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
    "4GjXvtjc27RA2vRU4pmju8ndZgTQPGR71oRNF9zD1mDk4tNXGzcTtKDwcBdpoV1B1iZQNurKcL4ibtpCm28RrHq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pm2xTSTXJ32fXTbMdJP2sWNkS4UsJUJ1HYykEJKdDfbshrTuuEJ3iRrMktvpDwyQWStqe7EmUo9GpdpeiUMDw1N",
  "key1": "bEVGC2ZvWJ8j3xLw2QpKVjUewiNoHPoBm2CNX7MrpHJY1wmFeFC1W35GXukyn4CtNbcHkEnrLpJJpLVti7quW74",
  "key2": "3KgqNKbe7g9AiSWAoFQTrrgmXMFSi67zd6cmXGUiE1oFfbckW64huheF87Q1KjfC2xR2vZksczDgymk6dHyWunh9",
  "key3": "4e236uZDHa9Q9sKoorzyuxdHtE62bh4agfrkNFpvqLZ4u2fooki5uhZLoipLjgVcA5dGnEZuifJTr8Aav24ovpMv",
  "key4": "2jhBEXRb8WB4QYBWCubN5r8DyheS7R34vpoP27H5NwDNe7Zfbe8AH5YsLXY2vsHpHGq76mWykJ365xJuwXvUhH5e",
  "key5": "X7mmyjQ2Exng6VLHFHrSu1HvpRXgNRqj42mQiZMQxqF4aXV5Zb8QTURLM47FQqvnyTZvyVANzGguB73wuvknhkf",
  "key6": "5kxe9px6jMwZPR4bCD9bX4q4GWRnbaSZbtTjXg4KkeUvz764dGZRrg4HyaUjhSpnSm7dDfDjQNN7gjuSeNSBGcX6",
  "key7": "4vQqs9KiuGe4WvG3pS7Eg2RQJScC5zSyzG1oXDzvaCrQc3US4kZnwr1Xa8m5nyXeiu7QqQYKzdyUo9Vg1HMJjZBQ",
  "key8": "4pWpPi4BSp9taUks8tR72jAh6V26Qp9rv2g4pq5HGrGLozAXzZSaVfTNhoh111Hd1Ma4de4aQBFsGVUDxJ9awVWR",
  "key9": "Ka9aGsUrVC1nJS6vaEHkyD6jzqTjeC319rL9yGxHEvaJy4LJxoh95uEZ33QTFHtzkh8kbLBKUMGfNXUFYnLfE8K",
  "key10": "reUQ2xkhkaRLoWehzvLMM7cZ4AtkyGzonw7DHSB7bj4H71kKnNyXuuxDMayrE6xC9PbTcod5q6ABc5TYj7Jy5z7",
  "key11": "2iFH8x8K1keghRnxVQ3bKfod3LewHpAJtr2oDrp3PEGrkbrieWNMuz9fBURmXr621R2HaDcJZgeeQ9Jy6G4rEswX",
  "key12": "agHgrBh9q2Z7tRtu6yVNbG6BVs27v278vMScNBQRSMPnr8jGshfaQeCtwDDe9XWwS8Ati2gNBWTBp1RYiWrfC7c",
  "key13": "46gmtkFk4g2e2a4aBkwVtmRY5WbwsHdjGXMNsRGiXex986cCEvxBxgZR55iQwT2WH9mkCqncnQGhJBHwVLkUJSpv",
  "key14": "64boTXEYH52jDymE9St9xJMoKLA482STZgVb6gcpHNUd4yvSpyHpDsS2nKu8KXN2NgeuCAqwG3LsRseCaKArQMfD",
  "key15": "5bqTKfa5SXwpQwFRfptPfr91teLe2wHYSQSDtGXbYf5CUnw9k1qnEadttGbHJpXgHg1cENzh3uxSpQVcKsUqQV1E",
  "key16": "jYEQ2qMt53REsGRQAmygWB6PxcGuH9JFdLXVdknYauyr7VTCWLK7dQVtBSmgYBETuE5CjiMkHtf9PpmeTS7qWxK",
  "key17": "25vgrLbi5rs7dzu3uT9LxyRPrYxshqRey4w6nAb3szx5yZsM3gbgud751vJMhsxpEWPXTXgr23Cw6XAK72FgNxF1",
  "key18": "4A7G4HARnw4qsT335QEE9nvmi9c3PTCLMjAp61qtLbBN6UABR6uzExehPhDV5pcwnVbMV2Ft2jn8gM4riKXN8AZx",
  "key19": "4tAKRikvzB4hHSaZAQmhjVhrgFHCQwdBqWArBmHLjzEooxYcUjGqR2BM5BRWwHcFEhpjRqZkRkyJ6M3fcqsfbY1K",
  "key20": "2z4MuqKLQfSpP556za5M86UKNRiWFgpUc1TEXR1zFpWk26uN8wM7SYjQzGSmnUWxVVDtDFAWHnJndh9XuvC1b8gU",
  "key21": "2YJ6bhmf5PbDHQzsSDptrtQCEdE9bPciAV7hFKLvP6KpxCLNKN448A9Wk9ctcpSJJNozo53MpVTQgiBdjNuvD6Mj",
  "key22": "43m75Hvi7eRMDZHTiCgdsmojqgkq9qBEAiy1ecJharUfrvR8kbyVkAE3viQj1DW8iVck9cxDcbHg6njgFawPvMRT",
  "key23": "5xvf7SDfuM2vsGC3x9rJhZ7hbKjoTVyyLgivmR5ufYkdtx4b6gUk31MPBH7H6M8y8nVt77paXJDKanV5GGJosQMB",
  "key24": "3ySnLZHdhPpfP7T8LperqwUviVAjRAABudGTApnrNRkm8yUFLGUye7Vg4xqE62sUn9SM4EXYpZTH73eVYaKYTq63",
  "key25": "ruB55t4SYDtWKS8mgjDbPYBeVoKESAHqJ1WUqs2gZKbbndDcZ43EEcVWoYVdsd8hdTeQUxBcMYbeoQ7TJECqDH4",
  "key26": "2BMKFPqkiy28YRgNahwAooNkqfQJLeA99RsVr7AjCiddtY3RHYgnUJqwAWihkVqohPNBvJd87G4PXKSpTLspPqCP",
  "key27": "2EH2Abh1TEqa566pkycGLXR6twVHgjzcbdi1SUwtesNVZWjeA1xsZxykSQuvaA3Jc2Xi6Kciqw5nJ94wYVu2CQYS",
  "key28": "2tyqCXbWVJEG6XnrWEaKCkgkKYkwacPPKj2fHZQ5BnNWxeC6zUUk6k7e8PaZELFVAmz82KnjEXz87jLthv4gQCrf",
  "key29": "4Cz6F1uvzhf61doAsw5a597EcQ3i8KSq1DB5LHG6F1AKuPLdPnth5Fk5LNo8qTXqVgxXbopU8wT8QgqwKXCeXzcb",
  "key30": "62gMvCqThmDjBbrLfg1fuJmPxkDeVeWNBBUU5PurvdP6Z3MY2TJ1MdsYqPwj8U6vHbFpDqWotixMGS1hNSx3Y4ja",
  "key31": "roaKUzdxkLPFHmkHoPLoQDT9JqmmTz14xNtcksEtuw18vPTxufNFBPEkkf1u8Kiik1bbjW5H56eBjAWhbg4MQsB",
  "key32": "5kvwWUMCCapb5JWoNBTfcNSyVn7dNX5naQWYdZ5JwnbxjmAeAWk8gtS3rDehkLbTwinYBzNJbd3kA9yfi3oU9qQH",
  "key33": "4czhfph6f9ojqcxf1RVQ5hLPVv4wjY2ipPyMfmVP23ght43X6DPrpnceoBtpnN2tgbLF3z3Ls9kqmL31zQAqpaUf",
  "key34": "5iv996h4g3EfXWSidBe54wZyoEghjxp39piKEwVbVZwxxDbkFaXuCPcpf8xS21NWKU3nPEDpp98dcsaX9Ghmw7Gv",
  "key35": "5P7bssAkK9TSJmq1s4HnxXPRUuurrXz1rJiMo9hsPtHXYHWS8rkSwuQHqLqA5Yvo6Edh7HZR1qHbuZ1ENL6RGsGU",
  "key36": "565aSLmt18DCyw7TrAk24bwNueVH53FXARx6rEBFkrm94V8w4sTPNdH7AFqXLTLsnB3xtsPUxYxccgzZSBvTvbDe",
  "key37": "2hq4QnpDrbfPBmD7GR4Jra5vTPm3Yws1TumWCLrU54qhmK8qs43bchmYWuJSoFJdsnTXC63NMMZqjzY55tjTD4Db"
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
