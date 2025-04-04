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
    "2kVZb4bTAVcDqadaC9CmoG8un77F1CN3gTaNkMXENCGkRw69QnNT6owT2STxksJpvvzF283uRi1rVkaUuqSwjKKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Kbyfnnt8oPv2bLw3P1EJg3DMkvTMS6YcuDbEJLLHWuppUJPnCihuXByiZrFHUCPu3XrHxWaV1XwnidYxZUkSzw",
  "key1": "55KaMrLyPChRhuwV7uDtcz778iDgG9axZSv2okzGHcXvfXbnmdJp1ceeo3GRTmnQzJguSh4bnpMFgo3QPYJdnE31",
  "key2": "2WZTRrzj1RdUFPqMbsSvqYCZ5GqakWVdCf9UjVpu9iTrNnQtZdeQNXhmsTMCHu7scXjRCDjKC6QZTLbDZnQn9quU",
  "key3": "VmCMgypuEi3JKbj3AkL3B56CizZYrTAMCZz9fpYKLS8Zow1bzHeZ2gtjuEVLb3oCw29t5HAdntdmanEhUsCyZF5",
  "key4": "goPPorwGx9hba598yQGYX8X31DGrCPaqS5TvSa4UBgax3E4zeXH5ABPTRrEhsUeM6ifQu4ywC6f1xQTXfcDSxPa",
  "key5": "Y25hb1LMepVPgufooSXXxCo1yncGyQ6P1UfyKy4PiFPBdtaFJM5vSKv6TuqhYahHEWaUjuekVQTVrjGRVWEcFKk",
  "key6": "5qP5DADoHF7U7D1Po9Qptqn69SABfNRuH2u8nvR7KMu9LgdjJV2S71kPK2jRF28m8fr1DwNc7dDQ3d1ZdKjecjkw",
  "key7": "5RkmAuJhsmu8AXkxYPHrceMVnLb1uo3NmtXiF4sW45qo6XM6cFBudkCTesD8u17H4bEUtgkcMF3vycxxtZCVojTW",
  "key8": "4t8uHCPWvaQzz2z7WiAbQ8mfPudv3hhdoegKmLxk8KuFWm7yGyRrs3o7teY4SfRwpgc5ZtffkhJbB3RYt3wmnsvW",
  "key9": "aPaW2d76y4mwLuitf929m3XfZGwabwjFhCkMzu7uuYZ6XhwJ6WPJciAtQzz7mwu74ooJ7ruBcHZA7rR34pFSvkv",
  "key10": "458hYDYA7HVMwUngyz1UCF9dHfcbXxr4dGo3k87NL94GSe8NpJFZh31QdfHuNiBBB724ZJ1YT4usicVigmDu9bJA",
  "key11": "8uTDx5EbRsDFaNHmAwjVnnMwFyoErMAVion4RLRdYHRNqRZf2AMPXSgRyABb4qJ1nE4yNTXtPZ4Dcp5bQUzbWbG",
  "key12": "4Uvx9ZSut5LeFWpwfnkxtnCs8sUwjFBkJUaTByMNwVGJQFTLNBGPk8C1HN3R9o686qkr4dVJ42TTSfo2ankk9qiH",
  "key13": "5n2dtc7YnHAPqV3PSQB2WT6Na4AiCBHdoNc2dfkEPtq9bbKPxvoxRuX8uoHw9SCFdfGuJ6J1Jpu9z7ZmsgvjTEJ1",
  "key14": "Lxx1w8dzRTQb9Paa78EjeMC3gPP5i8PDkD8RmYaQUqDSw8nAjiJ466C7pZxPw3zmVogP7Wo4xBuK3HW9Dk89WCL",
  "key15": "2sQU17n1nM1FY66PZpn2dXJEN9WDcocXReCBE4CZqrFFxfnSY6qSGojNK4poWqGqgvNW4s6hHa4TMtjur5HZXr8N",
  "key16": "rVWXMJbRUsBasKmbPZChzE17DNcEY6aX8WLLW2bF5UP5BbFMAe4jAcyLrzgL6iTpUCnsSoHK9Ef2z8ZwUc1RVCN",
  "key17": "F2S6mnD8CFwJfiwU4P16pCxNjL4eWBL8WnKcL6M9KW1TPqXCNKZFfkvVVJoK8dTSK7A5FwHm4p5jh9X4KncKU1P",
  "key18": "63CXkhQE6Ek2J7HDSneTMC3nHjVhdde7MTYCuJt3rEWudTyrGeiArGhBHMGmxHLhN1Jmu3UM7JFgT7v8YjeNikc2",
  "key19": "3NS666Ge2XPFY2dNZG4NmAsumEAVAQo2APMuBPomiFDh3cU7tFFrsETdEHpa8RVdRXhFEfgJBntqH3nAKqUuV5d",
  "key20": "5Qi97QX8ysyLiP3jwoaxb5k3fmY2bTbtrnx3gHszsBAzfU3ae7yXCYzF7SrmiAb9BHxJwh1Ppsgrzq1ZrWv3UZNx",
  "key21": "4sT44pNeLshrameTLSJf9an6TnYkCxZ6eYvGEaCkU2WY2x9DBbAPfXkPC7Yfmg8taSjDQtyURzzMgcNjqxUQAaJd",
  "key22": "4gtGyM4z89LmvPKm14QUdJH6fU45RopxFgxsqbbgx7cWSjHP6qwYfzqw93L3KuAcU3RGwYWsmhSo6Jq6SUwwK7pF",
  "key23": "3sCNQhPRtUy7zsY1wMCiomE1GvB3SRzE2TN1imbfdzJDKEVdxj8fsPcQmVFbBuxSvP8XGJ3W1uzm7vMwPsEFF8m3",
  "key24": "LpBcWBamYmiQguPqe2u1fyfKFNsxpRfemiWa1DBHnXbPgX4q3dfeX3Ems4DFmjTk6psgH8ProLUnaJUN1FAyPNa",
  "key25": "wj6Bdp2LUmdxAEJ5XnTbsMRupJUE2kyfK7XEy5eeaKbXNRzaoaZFfjJKu2svBikJCQBFt9xwTe3qtf7CNZ1YoRw",
  "key26": "2JnrLZHpTnktc5MHk6r7rZzkeuGf3MedYnrBmtC7pgAnEJXpeKoEZwStXHsziGLU6jLoaSxNTWaQ21ad1pu6g7Xp",
  "key27": "4m9i2QgnYR78355jCu9tTAJDTewqQKy68rKH5AFQFbJoPAPfu1KRokgdNbts8jem3gyown5PE4tHdWuGr4DaarvH",
  "key28": "3yMFX1kpdTnp5FSh6J1f2UHZWJ1sGYh2TN2pz2jbXURKv8JWXpahbMfthj7cw7bRgqUdH3Af5SLeYwncUC8GoArt"
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
