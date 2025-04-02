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
    "4u84AaXF7jL1FfZauXuWyGA9Rd5dCkKM1oN9BX46Ji4GoQY2NBP2p4uP2arFqR5U1RAVsBfXbtSuwnZ3jsr8Upjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bNShXkt6M6pYBS7buscrHkLLw73puwx4PyEQSohNR14ouXkgvGYocaAemXECTLKvZMJNh9ZsS35tLGHXcUq4oqJ",
  "key1": "3y8t1uvhC8XGZ7nvGoDbk71rFxcgbfhBJjngEp9iRBkTEwLPUVNJ5M3FnNb4q6mWnJWwVjJFzhkG85YeMSCz5LZx",
  "key2": "2MgSGGvFYK1KCobwVjaf3vSwuLF4jyFrtiozKM4Cb1SgtMVg3iaZbJRoEPi6QpS99kbwzNzrmAmbPNEpzwRuvX94",
  "key3": "3Qqcijw7nWmmnGGeNnNrDc4rTtbVrax9iFuGPzeo9iXj7CxvPvRyqX7ze1RypMjuqQXoBSReaoaEBcELKgBsnMDz",
  "key4": "4mPedBqEtY5C68jFwxGpB2and8yPZHjq1Brnx6SN15YinTpa32G6YdbG8zt9DEPPRbsM9ic5fu2v74YJ8xXt1msg",
  "key5": "3A7AaV9kEag1NbvBhUJZr1A7QBr9uZaMrZiUfQ9hk5CaV5MQMeoKDQYsXQEhXKghHcTtSeUzEY6r9KPymd6Wrg5J",
  "key6": "2Gs8FwrABUQ4vh4r6AnVYXTpXL2M1LzZ8VC5xHGAJwvVLhDhtBXW8mtE4mP16LoCD3a82qfEec9wrWrVcLnTev8e",
  "key7": "5oksfosrSCGAGoFyg15JZNsdPjNDXQHUwytNWvrMY9kEDY8wHEp7zrYETwMVWc5CmcUaZH937CrHZCZx71CAHxgW",
  "key8": "6NWWr8o9NyJ9GHY5yZStPAbJoy9SwCvct9CiN6jZbMUEkznmtTC7rDgTogiYTbD7CsfPbur9pAQD9eWbdB6UkfX",
  "key9": "5WacAau7Zj9dLkpoSTWvXMTa2YgaQYkq5rC9P1DCMow6DAXF43rdYXQbmiFVUGDjH1FYXxLsQdguFKFLe8MViKXt",
  "key10": "piRYHLdVL8UZhxFTcihZ3mmRKz6uJ6XcCucQ3oTYaj6MdwxwawLPB6qy3qkRmWEcL1eJ45uVJWTFeLBqRgVk3HZ",
  "key11": "63q9kxfXnR1S9jGVdAkX5r2YsFsyTLbkeEVpWDf3f3HQrGttLbAv3UhJ3Nd1TPW7EE6eCeY5NWmZnbSArtWomh3g",
  "key12": "izuypnDa7B59UasCFe552fkec5SVe2k33JAKhYKc5kz5WUxEZH9YDV4rL6pgGxB5inhuYUdJbVxtb3ZiPawByJ2",
  "key13": "2r9pc23QkF8CtGXHpUURQC8yxm5sXBySn4oF3WUg8bGKiv3gpygsmUJuZPV9uFbgZkuxc5cW6mrQLR8D6czcFUg2",
  "key14": "3gf52dTRMHEdheMCeq719A7yYf2Pmixx21CNuzdhjPdkNpWYebRLVTW6Mvb4bBJ3XaYntbFnwaAddGyZ2WE33KeZ",
  "key15": "Q4Wc2xPLffwvXHd8SBP5g1jRzMgrBYyzrhfSuyR5taTqtokwdDTWRHC4oV8JARbEv2r8dcA7mC6dPzg8e9cZCdg",
  "key16": "HXotWA9HgUeDXtVmB8aPh5dMsjVSwxVUUGQDg9K69GMva9etsPSCFacs93MeKEM8QamSFcoBbAVrk94N8h7PsE5",
  "key17": "3g2WQBHWHZorYXahd2pKGDjSWBri8AVSn3ddwQCRC6Yxu6F9Lmh8sXzGMMrux8BUP658WcECJKJCcwNCeAjndeaD",
  "key18": "52K2bcd1RmFwDZQwrkV7fZiiY5xtKQhpY4SKyshwi6M6w9uHM3CfDWTjDAnCyGhk3TvvpABLL1yKKEsonFa4wpYV",
  "key19": "36VLTBsaxGmxtm5hDTfdtJ1iuDSyAhyLZdMiC9FBWd5tad5FbdEPfwv77TPWmeHLT1xnG6zV62AS2qQuoULhtKzk",
  "key20": "5ztTyALF4SyFGAcXv33tcLavg8Y3yYKFBagmrjLpVivAxekyQeGNfwo2xSWG8vnWozXFCW6iVBNv6vJUUseisXsn",
  "key21": "2nBWbucZ9JeTBP9JKPr4DXW69tabxypzjm6K8vyNvy7JFu7yaz1R72YbTgpSJuHLpifqR9nBC6NHSBaz96RM2PbY",
  "key22": "5D5ma8dgMta1wcNonuzt1YkiLqE1tJn8cLAVJrD3AhBqLfPCoeY5c8qtp7gRkBtu8CUR7ANnQKASRiUWD5kx4AGh",
  "key23": "24Lgvt4aUvpDte1CFrSCK9ZBqMJABW9v35hrxXjNKWgg4b2V3ozp8vzxmFJWqG2asZnbK6AvxhezZrWeJhUYKWrb",
  "key24": "3n799iDgNnqNmRx87QchjXm82EojWtM4PmTrkJT12kS1Dyg7LvpdvT3z17nVrddB6bMrm7LmrBUWVEZycRadWJys",
  "key25": "3qFaSZWAVwMh4Te2u5i4HBSD7Cm66MEcPVQtsiM4NfjPDhmwhdw253WNbrwrZG66vZRAHnsEVzaUEG4x942fVEgH",
  "key26": "4b4ERHceXfF5uWzAVWTQuWqa6YK2E1uYkHuDiDLh4j9TrQ2kmkjB88t48NEQLPxVdPf3xrANJFMgVRmko4crba6r",
  "key27": "593aKbR36kRJCp6t3fp6MA5JgjUFDemdrByWsd7CwewCBvzspAepsCKMY99nPqNZPqx78XZjHfVneazDLta3vghm",
  "key28": "4dU28jb2zcUGd2hsZ3ekt8YRmY77Lp9PJcdtpu7TW5ksJwRTNjc2QLYddkLHVt4A1sEE5Cgob5r9z3jieqCf7WaN",
  "key29": "4i2MtFg8bGo1dRzrXsLg9FzHwF2PQtMEscrwnruFLrraMqsNjSFRJALyRdzvpG54LkhsmSMReQb1CknJTk4YEcRG",
  "key30": "21FAwxjEvc8SfcUsY4oH2JBk1KVdn7YkhvoDdHLvpgCKttfNe5xaRPUVnmUnccm3UdgY1iCCjfFR7L5nWVwj4TwB",
  "key31": "3FUDrV3N8v7NHfWcKEr8bSKNXYws1nhssrwYZ86iPDTmubyKZM4sLbQguSWbGB2AM1syGX6pKEoVDT4UFyCrDHQq",
  "key32": "ggudHeLD4qt7Vj2PHA8qS7G6VeJYYE7U79hrn1T16CHvLRc9uzMUqqQSjnBxa88L7k9X8hjmiEnfMhfZxwQhCxy",
  "key33": "2BXqh1crPT1SMjQ2zE4adaBz2Skvk1R35WPvY8nXunoqjLDZZzmywvEeSByy71FAh2p8BmhiWG2jURRsY8zsFpWi",
  "key34": "3Gfmob1xUZhySLy93E5a5TyH1sskq5F8mBdsDuFAf859Juw36ZArvGeNDRpEuAwnxCu3xpszkrGKSmytHuAyGCWA",
  "key35": "cTp2JLDmTRy9XvnKiiuu9uJu8apMzUjmx7AhQSaJ2kjg33hAKHBefnKzb5PBoxMEicDKM9i491qhjmuroDN9Adm",
  "key36": "2rAjGH5UrfkyvXt6YPPVmeerfrWiRraxZqx9swjKkB7tGPWAUZRiJDfzLzK9mZvL1cb4hAtJ5AcBi2wmtZa1gKWp",
  "key37": "Fo13E8158YddNjzpWXytMYUXvPSBcX1QwVdq4eP2o4fvvnvAa4mETGEzNW13iAVE5331Jv1jdoPvFXmEJHkxhWg",
  "key38": "2Fu7UfX6C7rfekpgvAgLfwtDs7yeyLD63TVHzpz3fAn1CzuDqrS7hEQvHkdMNyXYev3N96VTXNtmxG35Yjv766dX",
  "key39": "57QXX7Y6bgaZWh1qTKDWnG794eGwV8iZoAXwXyYZmVidgkAsf78t6Zb7hF6UT6mLhZ7MRQm57Lfr2umcmJxkeNoB",
  "key40": "5YhFwXBmGugkoP3RAWp7WmKsHSevKRBZAmUMyxuAT34DCXoksnYcGqCxEmHtQBxhiigqRnktCeU4Hb2ZciinquQc",
  "key41": "5F6mPwDnVJMuHo4XVXA23WdKovtjCYZX33D1qEvaGteVVM5DwU966NXRnMnkfhGevFJeSy3e9ykKkzVwM48bcJTB"
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
