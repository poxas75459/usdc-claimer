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
    "2EuTCwoKRe1wZ2cTAGZzpdVy1wJ9BMev8JFHhKkJHKobf1pUTJACypZH7Kcoww4pwitFuowGZihDKKbTdS6QVhL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eCX66tBztCNsMqyhGnkoTNpBek1hQV8MXyjfSvs4q4fH64zFwUn5skE3mybxZ83xMoWqfe6APTk7R2DYD2QEop5",
  "key1": "4E6eZyH85o2kF2Z4CZHzzbjVBZRfi542vDaocLe1TNh7VAsNW8KUdXLjjADrbN14GypSsfpVWHAQx2bCkDBHmcHA",
  "key2": "3SeohbFrG7qp5g8PHU8GyH6L2sGobAiedkqFX24hZ4VoXJrGrPtwtyRMEwo9SRqedWeXJe7fHraduEUnqCaU3Y7u",
  "key3": "2Gs6UHHcgM39V2JQC1jiY9yvQzEa7XzsY5qcWZR3ikNHwn4vZ1pLcnnMeUiD1MHKkFpCLV1833a9V4S1kXS3xN5w",
  "key4": "2oERTJUYSb7n9mVXBCpSWCquvnCfZgizWd1rmxKQDpT5xLiik97VdQ986P8xeq3tzbgKTZXrKRYmUfRbVqt3JkiK",
  "key5": "3ZRgv1agG9c7yaitACAbDdinDRkHy1mB52RERisC2XdhjYQRyx3EMNgvxZ44doLA9HmvLdEu2ZcofWhq6xXKUDhb",
  "key6": "edJBGYBjGYZXztUM5AJk5B6gHmaaEsvmiBhEdvWaUjprsctMyppga12XZSWYPtikZaYuLr6e5xAS7M26pf43Ji7",
  "key7": "4WXdV2n3ePPPi8zoSXQKhCeC2eFJsnWSK9EgWXXaPDQucxXdta6zMYcZF4jDZ5o2t38nAEDVSZWeFzE3fpxMxthr",
  "key8": "4LDtQhyNY3yXSXR54A2vvW1YkWWk7ZeihNcRDdkuPWWPWAMXFeaAQ1Rhm9JUWRmqgvm9G756g1Wb4RY46R8SvEzY",
  "key9": "3kKSnXcwspLr3tQ3D3joFkCaUv7sd5oNGkGidb8xQjn8HBypSganzsTKdhDjmQ1zzNAr66vCH46gCQXoFH2ftFDP",
  "key10": "2hUPu7aUQgR3auECYLq8GVMga5Y5MnQHR45xX8qMGsPPUyKA6RNizkxV3YCvBeW8kLzbCQLKfJSJv2MBZ263DTM4",
  "key11": "4oDdCzvYh48GR7EQc5E58mw5wnFKmxDZUHKaBhWEvgwQrx1pAF3ozTnuPRt9c9s2HHbfDVJ3ZRsMSbxDzSANe5DA",
  "key12": "3Ymmhpj5XZoj7HwHUsXx4uUtCZCTM4TT1hqwDxLtqV7WCtVyaywtGjd2uquQsKZ5XPwLxniKDCVoew2SGWiPvmez",
  "key13": "86SWQPvU3FuTzYonMSwZpryXWqwoLwveBZoqnUNxpd6tMztS4bw5twhEvvFuEVApKL16oqdEKxsikKvz2gvFg2M",
  "key14": "24Xrpz5K6u4MFUn6YBudNj6Bpko3s19FHNtiMPy58irKF88JmpEkYFLLuuZiZ57XsKBG6TtaAafq14YivPjeZyyK",
  "key15": "51foCK4TBrQuq4kdnh4wyqSPAfsViT2vNTSGVr6f1mx8o6YGwpnmRzZdRC8K2NFnbbZRW4eZFktn2hLuspDcHNEE",
  "key16": "3c9LJ6niyKbX49FjRiZfYQnAnoGHxSNnBHquxDqz9bM8npQ31zkUUGMrGvcPtGsLbHPmxpcMbUfC42KqLTDtr1mx",
  "key17": "3KU22YmaTmjwzcq3Z14SGT6S4TMSzFY8SrvrR9xAQtHCJT5Qx8btD29fkgCgx9vCsZwpPAK4Y5SzM4T9m67zVHk6",
  "key18": "5DqLVop9sYvGBVAvqJFgEMmo2mWzRf7CdG73MpVtz9zmVxFJdTAJYi1rBcS84AEBK3QUWbXtX4TBh5L33PhmjKnz",
  "key19": "4Tbr2LBq5kicYDDMG9AC6Xyq8Yo3de5ZZwqGTowcDKPPwFtUzhibFNVMXTCoRTYrU3co329Pjo2rZootHTzzCepc",
  "key20": "33GqspfZ4WV75m3XREHhpzxMbtYC5MinDonTqGQUb2dkDYi9FdQQmH6d2Kpnjb8DcUqfdkxFqkR31ENrzfTRBu7s",
  "key21": "4SHiybCbquauk9WEVjWJ5839ZuG9fk6o7diX65tRoGjKVN698ahtpb2eW71KUUEzVSnPTX6JPd5SHZ2vFLAqzXaf",
  "key22": "2n2BLigKg8wmy2GXJSEYD9QBMfoWg4Gf8PfYu3SspdMbCnSzwr9QSxVT5Gy4cSStKGNb7wopnAN4HgXSyCHY93r5",
  "key23": "56hphH2FgccXWLaeZjESoySvnZU7XVUiBNhskves6Bb8fkgw3V5Ed2bM5nofLf39UtnugVYAVMXcrRYg7k61s13x",
  "key24": "53cydwVqhZzz6vuuZFeNVJnsSrKUKLk52jjef7zg2ZEruDnRoaxiDQDx9VJMPacAeEmBm9VWmdrtVh8pnBxvATp",
  "key25": "4NtNjkeCZvPRTY4YFBwgByjQobAX9EPggk8yWCRJHnbGRRkkJBYhTGhe2smrbXd2CkdszhcgVdcs5EbLsPvWiNoY",
  "key26": "28vbAHyANzkxPBhqgMZYJtYGFbdgPBePhnK1tDn9RBanLRqxcfzrLV9vRPqQfnW1akTdm1KYbPfeCvwEQyJp26wS",
  "key27": "3nmJDJ2hBPvCx6ToYv9PEoZwNp2MEbXhPni1wiXWD5uhZcpjv5zDuX479eZXcRTRPegocfMAyZ77yP6LNZJgZzDw",
  "key28": "4JdjtgEW6BiyweETv2zwSSYfVijqEDpPWhubTZVAxm2wqFGoUKw9xsVRN52bPyhUJCBFmi36sArTWTYxuxtphDyT",
  "key29": "5VYCxaMHZnf3KNyQ6mckwnHwBXLbVGcTa6uEK7wz331LZSigkJnSLLLs4V5dTMoJxxQFdQBmgxbNgU2TuyP1FPi",
  "key30": "4W9dYhVrFgUm8rAaqHuwymuTdauafbGqkyHKQnnA6MMziaPjc2V9dfwjx6hf7NkChpPV68RCZHJKrkSPgp7hgCzt",
  "key31": "3Et6QPbMrLnHWvL1AN3dTBkf2sLFfa6FKpVgpma8poFVg8P7x96m7fZRvFm8zcWoeUDyQCPf3oiBSJXyntZgAgwM",
  "key32": "Di4dHkMXhe1WEjRjF1gYszTTMom68cFmhXg8fXwZdZt2CC9bgLMrMHbXLc7obPJTmEFsiPUDBKtQ9QEpHHSQY7X",
  "key33": "3U6YdundKpzmD3yAfSSenUMYHYJu9PUFRSC4W7YJcyV7DBf35ofiUNGDWDZgV7Nar8Sa17e4tAY2ar9JJWdewFuY",
  "key34": "297g3HSvbpmXPfZyvwtcaksPyTZsumEn8iZDoU9ZVCYukiyPHTa9FBj6iS8gvqWBNBbaZrCw7Yu1wjvaVqonoDrm",
  "key35": "FMst6Hk8bZUC7Gj3EYuosZZW5Y6c4wY4C8cAvqRezngrcyvoPmZiRQxistLa3o4NGs8wptTGNGymN2YY75pD25G",
  "key36": "3iFiRCkZTeMFTvPxageBUJbVeEysVRNEJ2JHZitTTJTwmgkZwFN3duhRkLDaU6UajiKoxnQefJMdEk3MSeoFtq14",
  "key37": "3YMBgvR476eb16iZW9QBArdkRhuQvDexJuKFYFGPwTYXYvJ6qyKrXr1GGA6BvzdRS2vkRFdKa2JCqmcXGcSdx1YK",
  "key38": "PcKNkRrcgYdMZqwJni3XxFpYhsAhSiB9uWua6ax2zEoLh8HHj5dRixKWtKjgp31CMXmCSViQoNYi31x3hWpPPNu"
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
