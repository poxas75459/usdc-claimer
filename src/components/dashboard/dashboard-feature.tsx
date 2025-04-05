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
    "46ycnVnQ4kPR5Zoo2AW32wpYhBBCfdB5XJrMN36GFVZF6gKB47F8QjHRhrFuM75v93LGMFcPxGZ4o5A2SfyQLbd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YcfNtzJPKLmhwHY3uqS4jCi1oSVXqpy4JyzouLjpZJs2vMkUswLv8mL7GDCNA3crLUYf8YPWMqyAVj4LwxRMSsV",
  "key1": "2BkqiiSaMLXaCceAeN5JJtpCSyQB8HztN2ZW3Jq7eZEqSUPRtMshijYUe9RN1gGJHNupyjuUX5nwviiG6uBKUKYy",
  "key2": "2T8yFHikhMsmF4gTWgpb6JwoTvFYdzpJJyUGwfnq2iawo3MesVJw9m8kCq5k5rFtFU7uwZ4ou8o6YsCoyKeHmzsz",
  "key3": "4GVFhkwrDwbhw4ChRoxztBnnt15wRt7TWizSMDVBvFcK52TjREBU5exzecfqV2ZHDr66RQGP8zeCKasVeUiAHxe8",
  "key4": "2Rcr9ckJb6fZ8srwvCC27p9a6517TEhLPL64oQninTRsQV2HXtwmAsHjVNihxnXQHJJAwBjDsF6iWGwGmWmNQVmh",
  "key5": "4CFxNS83x77r6TczJQx8mr7Yf47NLSiLCV7oHrXnDcSCL3DEJA7hYjsBoTX9VFmGfFueJV78KMbW4p9JHmf6M8Zr",
  "key6": "41pR1vA6X7vQidLwTWr9qoNN5Kem4KpC7GaWrFriSm5jESEVeH2Q9e9RFJsHHmrxmZTXV5Z7MEWwKgD4junz1Dcx",
  "key7": "53fUPKwch1MJvrrGPh2G6EAmarzeBJobePh43SVkf9EQyoRfT4Tkhs18nfw5CZxGQukDyxGibEGbkmzeT7L6BPz4",
  "key8": "2d5of9Xs82942PYKdANf4hSuXtuJwZwQeGtP9EmnioVZKnyHZJbUWHdQARcng9D9bt8u6hQinH97gDWpEm648Wdw",
  "key9": "2NCE9bzqDdJU7qM7MjwBjPvMAu3tPPSfAsKHZnHTNVT4hZHTPzxixRhxBYhwAAwPcdNbURVJ8uqsZmX6YPEfqaRZ",
  "key10": "4trEsmDXYL4K8VezVM2FmK5URKJ2WjDwnikhBcgesUcuA298dMFkL2rtvHiBnujuE5eDQGupdr4mpN19tFFhSf2u",
  "key11": "3jmBisoM3LEuwa7feZNryL6T4pxvMxyk8jkDyzp7CdCen3a2mz1z44ShLVL4YrtfZ5iDmaMFYpnESXfUhsL9HzMn",
  "key12": "5X2u8taoR3aiy9TQSyGACJp5izZyK9EjU8Z6cA4mjcSo6vXxNqUMqdzBVf8PyYaSWTRJ5dCW52h4dtZfJWXebSsN",
  "key13": "2ft5fu3uubWfUqYHX55qGHpoYmJsbyZZeYTwHpQ7SRZgKaDYVgXepCiqyvxmJSM383uWHfPhdgEBPBpQr8k8GARb",
  "key14": "4dBzbZLTjd4urHHMvYXEPTuqKsiBqap7DB2wAPmkg9sekYFrFAc2tC3odqbYeeXAfwDc4MZcc8nHxws3bBDDddH1",
  "key15": "66zfq2BDUt17KBrn7o3LE7AdAixiAFdHn5GjF5C5LmncewphM1YW39hwP93fxw3aCbBcKg8i36ppx6Pb4nfRSpZv",
  "key16": "4Tj14ZATBQeLRiXKKkEfdSUJm6DZE8gK6TRytNvWD4NRzW6C2xcsGUWaBhnavngfh7BUU1eayv2uQbQ9apTEtJ4K",
  "key17": "3cZNUjbSyAhppX7vbtCKk2DZZ5h26fTkEM5tS6S2D7Btb6kC8tbNNUxCXhkpB2hQmC4P3P4SyjVSx6pjXaVkPatF",
  "key18": "5qc9uA4WpXcJysKPc2KtTDGSJjn1C1zDQAgkivESfQFznRnztVkVfr8gEc36kzCZRaT5PEYg7b7baWmtxMi3Ns43",
  "key19": "3rg4ggZcw7F1vv7Zp6RioiWpQvUMajHTPRMceK49VnZBwtfZ1UXoe9hFNPaCnTLCdL2epBgkmyLLbhBobAU79CNo",
  "key20": "jT936fuwg9KF1SWg3Wxfe9apdSdmhkMU9848TXrFZkG4Aa2eS3MvuJhTvnBGGZ1nuupaFgecoKTMrMEb8XNuEHc",
  "key21": "5Hn7i6zd6H4qyFoezkSjj2HUHGU3LTcGLXwuCC1gSJnm5Sx9ig4h3nc224APoeP8XzKiKWSiJY3uehFVjgFSmgPT",
  "key22": "4obbrL6ykGCuekDtsNVM9ozXknRRRT85RchcVueUWh2LqKiDEMgnKB1bM2HG81v1PTPG2Fx5jhL9UzfKSSNtTDJw",
  "key23": "2nN7mM5QbQwzGAZF2L9hFjcgU3EtLK9sxLo85UVFYS8i8oM6CiEeCU17wvo4aP7ScJ644k7gFbjXpmbMktHsiE2a",
  "key24": "27Y2F5ZJ5JbJgP4PzKWbbZbChnPyR3FXRrPKpcnSE6K7RCs8etQKFE2xE7ic3wDRrK8BWpYfuLeBRLr4YVV2pMEj",
  "key25": "p9EpYFofsSb4RxWAKfsFUMJZ7grKiTAtFBj1vGocTbLXM3wznMVJiNnQNq94h7PaiFuKEm5zVddrmcJaxvEHic9",
  "key26": "5fhCvsGKcwnibirAByNfDyKXBLsktitDwdBQdok7oeX9mCegoxVsCwPV96gaKL1GrZj6k7JbwWGC6JYkQM5EFJV6"
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
