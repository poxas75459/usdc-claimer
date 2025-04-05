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
    "2eJ7qiQ7nvMSK3v4pkQRsA5cpTFU1oyU8LMAM7S9QW23ujzpa5DPJeVy35ib3CLthYhs9sVHrdKitt82Dw3TygBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1DVeGnoEY1wuHp2F6t87xNx2ymisp1UgJwKGZvBF6y8SxmeKqoiXLicHN9AY7iDXYMNXfmf32JmcVQSUAWhRQ8p",
  "key1": "4Qv7pfVKNvbifRC6w4X5Fe9EaofeagH8oF6nM3HQsnHh9qLn35dYYbEByaneyaK8KzTweHkxYQAY9mCXex8QZXNt",
  "key2": "2tsy5RpRAnrVnWTrrFrm8HnWsjZamjJoBqbsErREqqDt57evdAjZg8egSJucEqeJce8V6yokVumRKuFSyGWdrR34",
  "key3": "GUPvtpym4UEbYMPqQijzywUT9k7DWBcY3keiDrRRuuGGaZN3V9avUfg8NWf8W1GNBkX4hpgNLBvKksKHfCEpqDg",
  "key4": "3XZt3Vk5dmnVj6Y36aP14s6UCADRfQ6s1YjRWEaTdrj1GZu1uovn9w2otgZ86FdqbyP4d2WpzQN6TBoP733LMJtc",
  "key5": "4uArT1meDAcyjJjC12VNDUhLwHPafs4Qkezxujh2Ur2yAFuQHzkQz5kdC5ZiDkoi8YZYfs2ypXXqfMnW4tVDnJAL",
  "key6": "2zyJRMewafqfJTbGFdTR5F9ehnjQi1xNZB9TPVndTKx7C1Ad4oFmHCmywtuEQbmQnNw2Nt4kiTCVM4xfmgmNLtGz",
  "key7": "Jyq7HjNeDQMEPpDLf2ndsBy9TbavDQ4JL7sxwxChanoAUwJzEHdxxWUt39FB74KSkWyZVj2TvzTg5mQ18rK7JLk",
  "key8": "2EkUhwN1Nvf4VZWtLDGprr9MznahfXc9pT33oDjVQhTkaTzvAvS8ESKxhZeqkBpmn8GaUDk6SySviTdmEAeoDnD5",
  "key9": "qvqvxskyjgSTmaYeBV7BzH29UCYrzSRLUDFm8pG9abTHyDde5pQgZLBGvFPDaPqHoSLBdnWnKZWfNzDPG94BkTr",
  "key10": "s5fQSnkDMCCzKR4MwUNLANTumPRLP8UW2YFWm53VsnwyPLc8eoVNti6fZ46HRnzuo4T6vrdtVT2hmwzY4RAdr7s",
  "key11": "y5WQCa3iqWCaj2dSAmUNVFy14UDjBWgyETncGv84RgwSMYHEmW3BpQizVjedrZ29JgmTrhvvihCDXrZeb6eyJyZ",
  "key12": "5NAiGhHfjqCSASv2qFSyTbERu3x2Fpuug3u9jcy1KNGCaRChHfQGAR8thEcAQPfwSyZd7AUnKQdhy3BjyiUJN4YA",
  "key13": "3Xsy2JSrHfyXDTANdBDeez48LS1AHJ1n7YnrpZERWzCjGgXvRKeCi9PcYCynx3LiQm4kaVNBDCN85fYSmJ6ft9Py",
  "key14": "5kkLBMANadQHU8bF7xt2N6vwH9j1F37XC9S5NyekvGogQcMLz7JRDDi7ZJ9JobvokDAiNcnLuCPcHQaj7LemyR3t",
  "key15": "Nreoco1WMhz28qtWM8X3oWUpkZKvVg4dtmTK3y7FY8SqGfHbHZgWLy3ar5cAXWYTS2e26WESHirhpbx9HWd3sC8",
  "key16": "64uBnB5TeGaF7MEQ69aBLCo8NZKPQN8oKiT4TbYiC34J5Evat3xbdt9W8BZAZBC2tXxnYHi6jQztkzRw3RRV6w5Q",
  "key17": "ZhsJLNRr8XvzU34GYB4tuVtyiLcXMCf9au8fcFh8b2tLMJvpDU7pQ1YrRQT4y39RZMAGkznLbxxgPHPLNLRrtbq",
  "key18": "4rgyEa6s7SiwNNpetRRNn2AhzPmGj98JAEvg1uzvs558Rz1NrX9RrxC4fNvnkgTMS3D5UhVCdvDiwD3J5cxheBpJ",
  "key19": "5U7bnxQ7sSEf7ELURhTnhfPhfhM3reaQEvtvzHhSBazu6FgfXPbQa4KjFfjJ3K3VVbDDU7hMTY4f1yPGiepRLyei",
  "key20": "dPcxJwxZTGRhr9kbnQcgy1F4fyQGNL8xx8ryoc9CJBQdhvxHaDn5w4sHee1yYM1eDUwQCCFK9yKkcYDQYnLRRtp",
  "key21": "3N32YuoZMyPxoBjovvhR7G6Ew15zFGTKo9v9CjjXHSpZZVVpp2v1EQxm9ckYJtfAnbsffDsWw9uhL8sqGQkdLRAR",
  "key22": "3bh8XTV3wyKfafmrbPJizo47PGqZ52kfBmAx5Tc6GrNKbn1SPZvLTijoxfYyAgVvQj38E7DWjC7U8exvXbUjiDuo",
  "key23": "2EhvBuSWCtR8GbFzmHY8KrfRNpRyfog8mAAxsTpjDHrEoWNLddCoSzAewamYSYmREgiYLmtQmpnEaVSiH4DdDoFQ",
  "key24": "3qvrG8Ta1YTVPjTaLpEvAehkNtoSF84AKyrZxTsEJiJPPPWvtVoDL7QbcQQCTjzm4ScsoGx6dWbWjj6wRcykJn4E",
  "key25": "2ttZmmKYjB6D6dYmofm5myGBvh5hd5Fea4MPnWGr5JRhv6V6V9ZQmvd1WkUhEKaWkTZxbfX6DWTxCUcNtSQWpxCz",
  "key26": "4HzC5piRVYCi132qGE4LFrB5cwYXntsedCzHvUrEbrJ1erEESyQke4ZzEX8C8kRQ3TtYjtoiEK5KDS9BVm2p11Kq",
  "key27": "2VFFinkT1y8LF5J4tupFpusGzR7FP8e1iGHtzAUpyZVy1GnpAe86YPG3oNmMbQkB5jDEZGrpWmT26F7yHr78FDfr",
  "key28": "4dzFwQxvRFMMjCGYHBymquaDCLZmnC7UutCr67cRH2FhakHaMc5FV85BV2FfBn9Z9wYpgfKuxmwDG51hMdCnRz1g",
  "key29": "5HyBajkXddPBFwHzbGoXcXW5ooQFsFUGd3krUwEQuVbLbJj27HxrWrdrLmwY32KFSzwZRgrNzC4vWR2BB7KJZk7w",
  "key30": "4GZNAwaADXcqS1tEvMQXsdpxFssETX5e3N9GtmvsqeiwbEmeckh932Brko95f9Xmzr4nmj8E3KnSyxHwFLFhnpci",
  "key31": "3PiFJEyhPF3mA3GtMEmG5CLooPwMuAhdb2AF9AsoRmXw7AD17X4su1qsvnBGsD3choYu2cqEyuK6bnSZyziYHLXA",
  "key32": "5yT2pTYzWtTg7HinrQHi5sABjV3cWUSWHxjqhi3n3LGQQc8D7uho64o9h6ASj8DLkEdcZTxrNCcRFKTU7JZfmxgR"
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
