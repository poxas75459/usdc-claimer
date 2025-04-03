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
    "3AB55tuVamm5aKVNfW1mpRyujE6pWGE7RZmzENebF1JoHMg1kygzBiDxcgH4myD3vAn6vMR8NnCWe2Jcfm12WFzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RJ3jaS5uNAMRLSeFVDunoboVjhJHBSNTACtxhaogNA5swaaCAuadwADTXdh3P7g3LsvzRdwvVLDRQBNRJbaR515",
  "key1": "RVCHqx3rSjA2XqkesHv3hnfKypDgVT2FY8X7upeFFMKTEZfgGamjWipfnsrp8ineFTYctCDQjWFZfahKMVafVVX",
  "key2": "SiF37YRJZAhrVhL3iq853SrfB7NCBavDcKxYjYPf9Y2EKZrbVmJy5hrUopKbUCoJ5LjmhEZknFX6cuSWS917Sn2",
  "key3": "2bzpSyH46MQGsnbbo8fccutbH4cxFy1iBzjq9YLpgPtgAYodobSgxRn4hQT8iY1zQ9SRSbBdzqP7bfxZfckJ8EBW",
  "key4": "5LH36JYdcnXEyFHigXGBrn2DSSVZXPQw9oPBTzVCBbVvqcMBKXmgEjAvYeRQninWckAjfUnhiEvwwUYYLApaFXoA",
  "key5": "2twd77uDBC2vKGTrQzW1UvaFNsgK9pPoPUMj66vrNC3tNM7nqdXWj2RA9JLRzQXKAaEeCaoNkpcLkkJvPSSfpDJP",
  "key6": "2pNjjWgpBqybFXKzk6cUuBNmTzRb1v41acbpEqbYzs8Ct8oyfkhdbquQMdEJbrEYDEfpn4aJyLCBnFRBZ54PtJct",
  "key7": "4yjJobXFxiMwDYio9UVoDumJzt4VYBSvMZdJNzGzCGS8jfPVi8DiNYg3vh4CpMjKKtL4ahFfAYPNJQdEy9EaxrBm",
  "key8": "4UfLnF9CZ9WZjk6v2D4H3naHnUUHbzjstnZv18QDXQjr535Mk3vERkapauwGM3ijW3ZsSmVq89YougMHYpYJCBoR",
  "key9": "5emvu2weSMKzXaB7PTpHkptHaP5g6PhXgguLsZntPnwD1NWwunGReYJx5d7NhJKig1LHA5Akvz8JeJSeSycWQWo2",
  "key10": "2tsMiMp6CdpKBskreAMSYZKHAYkjkhDmP7V3Fyukmg3842eVaj1BGpx7MPSq92yQYZpJP6ULnmkxc1QfLSkmvo34",
  "key11": "32LnKjaFvm1s4ZnUiaTeF5QtwfaBEBvsCrBRtfsmvctDmdSJoXwo48TGfNGVYARuYW4ibUpY4eT7V3hut4rpCigo",
  "key12": "e3TLV3jDBnK95EAXP1CQy41RBsTcRuoNBkppXQXHbWdv4iP56Dgf5wHpkgpsZyMoZmCNr8XWF3YpepHrGeGBh3q",
  "key13": "J9SYAhGrNZfshHBmP8wT8xpXNCrtQ61DAwM7asXkRJUK6Agx37NTaYGDf8FTTtpXUjXvQXn7tkvWL9UNjTL5R6s",
  "key14": "2jkh5vPUTSMV4UmZLKgC3s7hCLyVd6NQ9B3jhhqhoCYHGdSiN4DA26r7yR2xjbdJ5tj7SemP38U77pp2kgEF4hG9",
  "key15": "5LmMDnZ4PacsFwYvHxSZqi4DkSdnjriuiXKQP4xbkqt4vzPZpNjpttVaDsNaXEB8p7BHiYSGhYvNkkoGneFNGoSb",
  "key16": "4LM7DWrrgaLR2MmaL9ZQcMc3Tot25eVLx2XJyVwjCRgVUzwhTuCtJcQpdAqhdLo9UKdTkFAZFeHAHi7cpjQJwruk",
  "key17": "5tWQaZ9iPX6P9SdujLRNgwyzsbxKp8XzDhkbh4uZexVjrpCtWwRNgm2NRRrqZW9faFhcbdUEj3L8cEg397hPeJmK",
  "key18": "3zHT1MTycK5r8og3Li5h2Kkjnb2LbCVCuXt2EQqrfe5iaVCdMNkTn8qnfZuSpPbF8aMAihtNJ2BRj3mykVDzPknh",
  "key19": "3Lw7ZzXx5NhGPnG85JbZZeWrEr8joNac1qBrMHUykXEa1nQm5miyJjkRsUU1kv7ADzHKyRwhMwCY9FoMezxVm8Mr",
  "key20": "65Pqoev7ZTo5kdTqaXR5PuxiyZxWJTV4PT5zvaWUj9vBbCRBJCiz6Z2MoYDmZmnyiEBwujAy8jEdazy5LqsgCJmb",
  "key21": "55HAHr7V6iCHbkWBChSMyu85E1iVq851eSgugccBjwFi4ANXXX6fyNMbXvDKmu5issXFZctYYBsepyMtVcGSwtDs",
  "key22": "RvPSt5HTX7ZYvXochvSTcayFHyBj1NtkvWaeLwLDd279zSLmezbJEzHR8y5Rwtsr65ZKR1GyLpY9xaTqRo7EurX",
  "key23": "SauizbhC7RwqrdkmbYXRV9FAJjRX6xJAQo2yeiDtXMhgQ8bGz4a1K1D1sFfMX7N6Hp94scfvXe8DAyuhCDCCi6c",
  "key24": "G3inWnJdoXmtHpbBfSesBLuBSM4PprvnuHQ7o2RrHo6Bau3e3WiZ4jUdW4i8WhqmW2KytPp6iKSjhH4aeQXj3fx",
  "key25": "27FDAhbNVSxqMvqyjVUBnx6t8ZPwZEwEdb8srbB5xcHhkgw1hNJu1oVTkmWvjMqdZY3yERyrczmbqqYFhW3z7DVw",
  "key26": "YHoZSM9mhorJyoPMzrqnj8wnXA2PU5gWoBBgRT6tEdPCNnzrPWHYWC5kJHreb6dzf7iWHH2afpARWmcvmKzsN93",
  "key27": "oUz3Gm31hCZgyBQUXEaahfj6DfFYoQDgfq114jmzWbXqb6Uw2iEoMhgHNX1vTs3EBCszwprp4PXRnqm6wYs6ySL",
  "key28": "2LQeDp9r1VfHd2vCn6EvfbhqHd67WXomsDg2Wwk69Y3BDsNjznbBkQLBJDc9nG7rqAcjyjXMTwyLEigTXyCFTzjF",
  "key29": "2uyfFUN9MbW9c3QRicu38VXjKqLDKJ5KJyqxS16uM8tKpcjayeXj7dyHfbCMZEjFH38oqnvmEDEoSmXaWxDQyr6y",
  "key30": "2HCW75KCNkzeSwaSaYHkaAuJXVNk25T56YLhLrS7DMYwnaLLhxsukXY8HAqP7SpMZd2cZkVLEi5vKhpkws8feRN4",
  "key31": "SZfAYkpetst7QMvRx9dfDwua85LvR2k3VP5rHZ2sSVs5NRg1jh86FwEAPQJFERxQdsGCETrtW2sv7cCNkJCW7Ao",
  "key32": "czPmGcQNT7xZkGSACYxseS73x4QBMFFwUEQ6bsoKden149YUyEw9EUNmHPePaL2vymUQNLFVp4dZHCSab1yB3dc",
  "key33": "5dKouXWK3BRFesLhUfMSH54pSUEPmhc7JAFDsRBtKYjBkqkpSCH6tTCxGsxC21K2JUCmqYcY54WbekYZVZQa28fV",
  "key34": "4sJyLcHEbmkV3TZtkXnBh64dQdeVE3NBuhuD2yUDWtSBJFKXtCNtieFLVkjvJdfrVG9BbFkjU7fXKsMpEkYrNT86",
  "key35": "2d6aq17SBPgNa6stVJAWVpPQ59YrEQWXuW1khwvLWma8bETreg1ExjzgwnM5ADWGT5kTNMEdbhHyKC11LKHE1ob",
  "key36": "4aMzzhBHcpNNgcLgrn8CYfKTCQubDRuBcoeTft2jmXquUbhZKkzNrENGqWeCwchK8Ve7xqRqZhMWR6dL8MfiGon6",
  "key37": "3i3dQZTeb5kGurNDWeZ4EkuQTzGdR9mt57wQXKiUjMV3uzVyJcQkqNQn5xs8qPM9A4u9zgKjEj3mbQAa8rBcqZoi"
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
