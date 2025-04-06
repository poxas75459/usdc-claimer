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
    "44WuWrnQgaKqbhqTF7uAgjTpRHSzGinCm4EAacWbbxBq5Htif1MrAbNpiEi19LVcbpkuwPqPUFLaDAbzBmBmGEAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TF88aDdAoHA1hEB2zV4tEjVxKkW4VpP7i5uD8WG7cqmLta1i444AinrVy9t26hS5o2YrQksmsDhPVsiN6mboUBE",
  "key1": "3vcPNLSof9vSzUup36ZhysassU9s8igtCCcBM8nhLx4vEpbiztTPc4mntykKbNA3CH7t43VMzV5BTZ7uFmhB2LWc",
  "key2": "3FYqVu5Wb2EcAaDQCoC2uAKrSmjWhVo6rMKnwrc7UcF1eLAXpLsJjNUybcuLvYTgWQZ8Aet1ZCUsNQJLCf1RwoeQ",
  "key3": "5zZnqrjRkHBPRfoxfjfwyobvXvnE2PfPsbG3kQvT1zcJL818r5pi9n2UtzSufCwSqGudPfjcnFAfweQqye5g2fEL",
  "key4": "UBoeCYU919xsoRJFxz1nNoKbqRA9vwUKVK3YgypmdcH5AHamWMA1xEqPH97hpaupjMEzvbK9XThstCNg7oqj45b",
  "key5": "2vJowdYqDMX8apAR8bs4sv1Ub3UAgT1HDQy8kJPGdXGXppD2MeFY6vSSSZg684D4H5kP7capEiugLnvQzG9cLeyz",
  "key6": "2qTc9EVMDS75N4Vd5WAjZeqb1sNHSHQQ9YaZ8vrLVrVfJegk6wwWSod2zr2p6guvuqnE2MnpFckoUnZ8VcmksLeB",
  "key7": "4DifM5nhiWbGqZzuJ7KqqAmdT6vSp9jHMxQxuyKTYa4vwGpLMVLUZWpxhqiTkKu8RyjagWhBnAtZrhZrp6rYPnLZ",
  "key8": "3VxjNAFBXJ8gddR6BixNdrY7te6TbApERaz3S7XkqcZeeEHE3Zvg3upR6p7ewgp8EnFS1WsL9zGRpCJVQBFKTegf",
  "key9": "2aeJ3odTUqnf84atEY9wrNwcNuFwDTk6yvAdsGGDzN8ydXS5ksRtAk2aYHdp33kTFeHR1tYU6pa5BmKdRzJfD5JC",
  "key10": "4GHRNJRwVCVDYR3vF3vbToBj4V11TyLNzr9jXDmTABTFSK8hRkk2pgSLSNPfsMN4FXLgDERTPx1T3ydUnfs6SP6f",
  "key11": "o4or6wmQWsyWd4GTUxNhXbky99B8f8jDXXnPHsYV9UYzj1JcsECDELVy5w3xV78qZbo1phMaZFWoZ23cfNUC2Jx",
  "key12": "4EmCGkeh7vouVaDnDLNkA1aQYZF1oJMEHXVKG1QYbcKHFce6r8e5CZ1dxM6VyjBczXD1sphbfQPs7KrfpppjkiWu",
  "key13": "2rua7sR6SmW4ScaQUXkErXi4J7g1yh4uNoZYn2LXdAUNNcyjeQXEB1CtPiPWVFJ21BChxGtzupVdrJ8vCeHGHQvM",
  "key14": "3X6ApVhR1ENCJ4SCTrLqWieossbhRXVZBfRRsz1qLpo3s3gbv6PVA4dcJMzpxUytFQAkyw8HdPdExMe2edEM9pB4",
  "key15": "2Ctxpj2ZKbT1hBuyvfbH5cVjrKyuBqgJDCvjivfaEk2uacwNcqaEFHiYwt1wd2Cjk8746kTzXEMhf7EF9B5hjEKB",
  "key16": "3digUqwLNvwCHdwZQBy6cDtSkvtjrGvXFg6vnM2iVNwebU7NA3RWaQUQsj45vrGBAroaw7EAULWYK1ASHirypZDo",
  "key17": "4gcdVFwRhgPPk2dvrsg1TyhYxZkXh6jTfW1u4Nt2QouQN7f6gMdFTHSnG12qTXD6VeoTWTj8eavBgop8NYviUyMz",
  "key18": "4sCNGFGtW9wmoSQ4oHxM3bje917RdCgfZPgu3WG3bhDdDUaHXjoqvEGf8DgDRzvAMJki3a8drnseaSC67rhstkW3",
  "key19": "27h7JC54CPvdN8cELPEtQs9vDvQQr1hELM9wABrrvFGTcTJRYeUxipgBkztW8nNWnALL9FUmsf98cEFP23nQMjrC",
  "key20": "3fZTdZXLR9Ff6fBkV4YRohYp5jRLoFzuLBw7s7vYium6APpzP41d7VisWAcKuok8aBHwNqhtMZGEtAqr43xVS3vz",
  "key21": "4oEcQ5F37wi3hVxqCntWc1Mvn2Zvcksi9WaJmzfhuGMs3vJPNWanDFDawcuYdTCZKviAdFdHp6H1fXPg963SbvBu",
  "key22": "3dWhByYMsrAqBJHFMQffmx4dxpNMo37CzGeZwU5CAsgPSf7HMU6FJSBM58Ypkcs5RKR4XkL4NRkrDoRcjpBjCMPc",
  "key23": "4jG45d49r7GGFxpjW6fbMn4JW2pESje5i4rzfYgBeaVsDJDxDPMS9dH3Pz3f71GecucWkTEqHinUKrdxgGqViSR3",
  "key24": "FyXDAXbr6MzQkQg5rdMP14zRTaCahq62qV7R94smNnxntn8Z74X3XcWaUACZEQ4gAh6Dw4kshNDunfBRYgACWXv",
  "key25": "24nXMzb1fYb9jRC3UrDVd1xnXory1uNBGKAi72jgNZGcxYYD41w9FR3VV5tTg7Q8UdpQFWhdkyKpuAYQZSScX5rz",
  "key26": "3YSQAFRNQAGUzrW8KcJWEHN7YsWFK9WEDhSgaZgn22uaGUNkj9mjDFNiqvPVwGx8fMxbok4x86tnrvUpcP6BEHau",
  "key27": "2mBdA1k8gomutJt3PypKEkGZDn8xGKcY2cJaE1nAV8FywMGrXXSf1zeqDFwZKPD3yX6k4mBkAmB1U5LzbTHWMnrd",
  "key28": "2QjFFQC6iYGw6YA5kPuFHJJQEspB2bu133KpuPsxxh9CqiArjWzeraThSTPs3Zu7xp8UnLfYCsc7cLopBroQeWbs",
  "key29": "4v6ndt5WzijBM9kcs2NrGpoBd7TSAosWbJo2cVdGiiW9jhnGgYMDpq9W3irWTSTFUepcfrGvr8YDERmSQNXt1c6e",
  "key30": "UYWAR2ni95bgQjuEsAampRDgtNbYjRQc3u2ArsEwsm3bcyHdCa1NSxgdae6FMALQRspovDMbvQf3B3QixETE6Hg",
  "key31": "3ceaagGR8b3AfLHabKuJruNx2Hj5YuwzUC9CUrL9mDQraeXVd7PDoJJZqQTZhdGBHWev7aohEsPNCyxunTrXT6hv",
  "key32": "3qzJqjRQUgUreQgRCzZKy2MYCZMEX8g4QJTSVL3RWRqNJqZTr6fevhdR212tATdn1xaiDQiFhbuzbeZpRgJfAoXc",
  "key33": "5bAFnjtiVHVGpKuanBRib6j2Q23uDUb1i47xrkbdhy2Sj6UR7GLdPufErhoVZHpPTkQHhtt21uvS1QpbniE4WToh",
  "key34": "3cpH2K9vHsgSMhUZMZyuzSJjyFavmpUZC5bh5G4zX5HjcmWQiofVrQsi7jRAvKpGAsfmS61iTrjq4ARn1ZdWdJC",
  "key35": "56MfC4ug494AEbkx56gwLJhi2z8bgzwC1JCPmeoRTnDDdt8ao1ssQt9juS7UNLrCrL2RWLHiSWXW3NQrz3q74Ctk",
  "key36": "5enFa3nFCihDGfQQWQKUEVWdZ1S6FfXP5cVLWdBphhuDD5cUmXxXKM6YDuEBpjdm5MWRcViiPrZW7LkwyJo29HDw",
  "key37": "3fAD1YmUw5o6ShsqNzZWkt1kzETZtoVHDvGkXRGTBLghBmGFsR4zngUZk4R9k63fY6fezeU2kptSo5EVfJC6CsfC",
  "key38": "29CYCPNK3XfziJJbu3WBhdrNj5jWTZ8FRN4pDULH7nguqNgsF23oQE2tJjotTJXsMxFcRAHuyjpj997gNktkTR8Z",
  "key39": "2UWZjUQFT9f5RgtXk1TCJwadxTwJXNkZUcXDEa1N3vfhBW3mSpWELA3cbM3B8G6MTucXg9PL2vxvooBJzahgpmPw",
  "key40": "4BaXfTijqz2rCGnKuKrZdXeTcA6oHu15J9i5hxWCVuH5kwfnWqyTrgXCL5cBrLLNYy4wLoHjMzQCaHh1F6c2bCWg"
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
