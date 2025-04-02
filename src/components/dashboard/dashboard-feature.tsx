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
    "2E9vt3U36XsiJAxcjS5zpZKyw3EtPjQonebXoAgEyYNuTjr52d1g7awaXz4H3i5wmiVEbvDE7YsJev7oFtkyvaAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T222ZXYBpa5GVwWopPbrYmTVdsGKPooLqBdQJMRWQ2YFtWFqQK6qYmrEU5zbFKLxSDp38DqPjtDFEm8h6gKUwHS",
  "key1": "4N2XxBSGK3X4PRbjDtcMcQyKj6utZtgvm7Uv14q7R4ZV7n2gECKsxEURnopXkbTRy5axE4gfYN6YhkXwmyyPSnt2",
  "key2": "dW5ygirm7phiVPaZmyPzfLw6pE2ebGb6nkLTf8bGo2YEebEuTZFu7sUJZf3UZaVytPy5P56dSjio79XvBzeQKqH",
  "key3": "2pW83qpwVqhzeJJmgKDTUbj9zvB1sLRUru1VGJokA2dWjPKrHpQgZmSUrfZXC94924yKfL23H9A5cSLiGakgnqDm",
  "key4": "21NCkDgkBwTuS34AoToAnJaVhw3gQNDvyJN1BMTgUPovUTp2rMhtZiwoLSoGKiiiNeJWPGsXLPqFQfH7je76GRGo",
  "key5": "2cRePZ6V7A653ke8oRCaaENTFd21QLVJdWfKgAVsvkNXu2x7fR1A11uvgrKR3N9YZahWamz4P68Fu1FmYGSB9DQ4",
  "key6": "2KzQ1RvBTyTxmfUX9noTspjNS4vuWSPDfc3SH2nEfM3KZxpDgve1T7HaPtM5E9y1ASLrHbs5G23zFY5g3RWaRHtM",
  "key7": "UkFDexqWpBC1Fzf5hzG9H2QxyRTqLXvaSjZTZjatA3ehdCW8LGk7GLnVS3StCoCRCYFh3WrJCffRTKSABBQ1HYR",
  "key8": "5g5rwUHQxnUuTMy4ZNKUhoxCaB4sNZad1LUBdLMfeqbMYLrvySqWe9cxuswpRhYrTXEjWuboTHQ8vAiBLZ6epMLX",
  "key9": "4dVca52So4YtWLGXsZ2htv7Zj3LneknMzhTg26z6cqq9USLhDz2ZByFXgWwBq5vJj3vLvHm46MMHB2rdMkZKSENU",
  "key10": "2c431hitJy1qVPLw5aGuSkxx1u5Y9JDWrdWrC8amAXJL8MfUZMb9XKgfebNuDD7bTPkaMFN4tTbNqWu44YAamSL5",
  "key11": "4qWFZUtmfYEwjYjAH3wTkwktMPH1w7cctaEAqpnSoibygxta71TNrw2f6Ka7dYB5fbSb4sMKnemsxdPwmD3K2xuv",
  "key12": "2gVAjRRu65XRaiVNSKKotR7mFzsr93FRLwjpJrCbjX1YVBwVEJUbDjiujXBqGroTW71gAAWFvf7u2X5Rnmpgdpa9",
  "key13": "2mavZuGugZJDgEZ9NZ2Vnpb6TS52hGovwoX68Fc8tjySRCd9q6Y3NpnW8Je8SSQYy9SbBE8iR4Dska21wCEsHmHd",
  "key14": "55BBdutQ6SbpEhbSmAPpZpb615yTXXVgvA6PBvwVhxuyrkvyNaQFMGG6XeU75PVuay6HmBm6UUp6egGoXbSUbcar",
  "key15": "36HUtrg6hvsd7UftycqiCTRhEa7CrYhzddnL56BMGQRZKx25jERwtV5baNm6DrsukUrTBSskA1sXgyhGUdn56rM7",
  "key16": "2MSKnWpdAvxmYvTGQLoGMTxZRCiG1LTeoy11nAUyQVb7csAphKAyHXtxXYGtREQSLdrWMaAt9Foj1EWymSn8t8Ew",
  "key17": "WhHFc4NSJgkKhxXdBX7kzEMgftKrWYbBnkTW3yANGht9zmxtoWoA9QXsA9LsLuDvRZkQwQy4z4tiW3BwYNpPCwV",
  "key18": "4b91soZw1zgab7gi4qBemaDEP994Fav7zXGK28DtrS4B4nkFg2CwY67HE9kiKdbp1EFPRiTJrvCtbFvAAmd7AwwA",
  "key19": "SaZm8cK2Bx9V5SW6YY3fZTWWnVH3Vxp29V1NX3v6zbzVuMD9Rebhbi2o2uTeWe51Aty6AUEvorboWp7nBWtY6qb",
  "key20": "5bBPan7yZZw1SRD4gbhSMQpAnN7sm3beVcur3mWMQmoz2RMPWD5XZvEzUVTAmaeTxitciY47heUwm7utgpkHz4Vx",
  "key21": "2W3aqSXTv8s66rHubEJzp1JJPiXfAmKjuFDWT2TK6pJkKRNAP5dg8Q9AjXAc71qiqf63EF1vFD8j1JLyzygLKkwZ",
  "key22": "5bh8h6gicWZCh9ZdEK8fowFwT41uTv4SegrUBa2ABXo2EyfU35PU2FEfKje3WRWr13Z686cAt9vfhhVZppBw9Gjm",
  "key23": "2BUwc3wTBsdDhyJgPcKTrzxEgMYfh3XmCqANCogvkApJruSxeGFyCYKTtDQwweiD2SResVeiUdG6DKv2vNtfYua1",
  "key24": "51QJ9m5J9naESfZSHEewkkczVzmvMKkLauzQNUqodJ5sHTCeLPdvXRiYi3G8ydqT56G2Vw1D6nHbKjMPZJdFsXwc",
  "key25": "4ZMsJctcWRcA1Vd7KeNqP5pW1q6uCEWRFB6rTGLqcf7jd5gfr1KGss5DUT2BM5J8PHVR7MN2FmbYFbzd8XTzHH5Z",
  "key26": "Jd49eKLmpcpWabq4i2gutuTkfQvNSAFbzExkfrNQjrcFFaekuEZQ15DCe3Anwknwj7GeyPxX2KGDcyu7x8sFVq2",
  "key27": "4BWxaQ5x24goJLmMCkqq2JwxuXUDP3HbYyM1zPUjbjSiTXBJCcS972X8Tep33aiZ8aSxyymqxy564sC8UEkNHqeK",
  "key28": "5vqFHr7fjZfwtvhhys5qYX8Y3gnjMqxJ9x9u5Psv5tWEcwTD1MDYGXgu43XWckbYpnftViM2LUBn8mjgugrVWSGx",
  "key29": "KR8KFKjpAjMRitQkskS4K4FQAF28NkEdHcQ8eXqiBPsdq4PELmJc6JF2awugQZu9hLEkcbTqHQXT4WfZyT53HUC",
  "key30": "4jfgaD5ZBFm7w59e6WVgLyECcvLExuSu8d32XxyEarL3tk9ws7t7SXtWcjr32vYiZcsBLytABh8fuaK2ZpsUy1aN",
  "key31": "4SHziUVefLRbVoqUfeJtM9t7e2joZyLetji2dRJLnTncf6jFiNzu4pvSBPUDzguB4FeHDXpecGNqS1itcr1diePs",
  "key32": "51TVi4pYv8x4cGdMdKsC4jttmhpHuAmEU6BBx2Hw5uXpzBNCfGAcbYrsNta6D72U15pKHHSCBDB8QSysQPgB7HAR",
  "key33": "49fxkTNhJFGq5Ud43iqE2VVUqd7T5ckx3p5tSz8jVfU8JLe1TkuzY7t989v9GuJedsGrhwPqidWHwxSU4K9uE5Qa",
  "key34": "3N6ihGgkSkim56wehi896cMqbHoEnkQtdT2g3kS4deE7uHYEWPxqrQH8H2XuiehL6cojQUtWGnEkd53D29zv5VsT",
  "key35": "3Z9s9YzQYiTZLHtp8oJJLCEyut4FjQaLDzraDuZVKSDVZp6HRjGjrvZwumbSHHFZbXqPw2QQkVHQyDGwq23CRLiM",
  "key36": "5CBjMyvvkM1fifppJmBNqsnnMN4HnzFuwqKZQUaY3EhUzLXQp6DCZjrr9a1VX2LYFGAbLRYJ4aiZZSF5pr2wi4iq"
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
