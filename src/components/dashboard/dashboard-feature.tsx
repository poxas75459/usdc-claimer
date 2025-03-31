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
    "2NX4seRv7khQLayg64gK3Au6Uuuz3Ri1WH3NYwdpKPTR8i8Rom3NCnLNGjdzWHF2DEABiH5Kuay2UtfCCd7uyKeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s575X4dvgn2RnEjFCBCWb9GripTCQvRYVoMCJPQEiFxMTSKSFnpbakFeLWTGDS71YxEFcEH1Vu5dFfE5zGc7SDo",
  "key1": "e4mhiXgTo85bpG611GvsCyu7si6eopddgqLeFBEhwRQGvSSmHEarevSgfBRtVpREfyXLbRG38AbJT7qoDa78zD4",
  "key2": "Rp9JfhpprWtUfeRqRN68amji9TbgrkquATrDK3N6hbtDoWAY3uw9QXapsVMG5PfB741yb5zJkVpoQzHZfL2BtGM",
  "key3": "3kNwXeyvhLU87cSx8mf66y1C1qgFa5JaWPo4vEwteKrpbE27EmmcgKoHTYgzTWCj8TTcjHxhRzBqTrbNuqqz5JuN",
  "key4": "5K24nxwc4Bhd5nEcXpyVy4VeFYemMeNErJXrb1mL3hHcnNosSqGJsypisT6nQgnPWv3aWvcYPLnPvptjKDk1eFks",
  "key5": "5B4zmTjonCahPmHZ5Kv9pRxzHT3vygsaWqGbKZgM6TPhZiUWYJj1qE9Y5aHyujqwD6WV55E9yGVULtj56KFqtvLP",
  "key6": "2HRyPxtnHtDhbapMStHqWZ4uCfmyifpqEHs6QaAoKPiquYnz19tcjKmCoC32Hzp3gesSWUoMvLQxWtwuN4suTw6C",
  "key7": "2QzJRiVuj44PXZuPFLivQHwUrsnV4oGTAtg65L7YLi6kYVgEL72HSqJvWtEc8ZiJGN24UZhcEVsPUmTpVedNWXF9",
  "key8": "5YrSFNranF5jCLkC8Bw5hw8ce5vRiRZGQ66pwNsKmYmr7BPn19NFYTdtHxfKjogNHPdGAW3o3G4P283be9Q4d2GU",
  "key9": "3AX999LkdeRnb6bEDHKygCA7fdjxcmDHP8B9shGPMYcimkPcrfJQYureWLQ8BGW1y8NAFHG6RpCezHA8RQHd6k4E",
  "key10": "5uYGeUBepY6EzeF4L6Mhvgq5MnNqnBppAzhb9QnGWmkuuYgUheLYbFb8vPX4DL83rdYJb14rYv1cRXyTLyLdkzCd",
  "key11": "4o6831Q75xNzaLUViEnmuDZZpmcucKCsNpKtwakeR2UNQf2L36ofDK1SEGQfgghKEN5UT8brD8yXoR5trtLmxqKF",
  "key12": "4vzRqkU1CV3WZpAkdxUb9EweY4SrUyf3jjpr4Uye1oeJ6YMj6E1ttFAVdGav57GfvwiRQutLhePPHRiTamkaQgNM",
  "key13": "3dVMazBaGva8tDtvg3uYXPCVVNZFAfiyAtLyAgQC4DkZsvYFvAwZ3VAnKTC8JFyy8i9rDfTHFcv2tJ59pPDWWADy",
  "key14": "2LwPaMj9ANeUcHSVqZF2DRXUWfNLDpoVeFmoTphCD2MdDj7dUyKJWWAriu1jHGHUCUdST97oXYYmrzfYWGdN832m",
  "key15": "5fFyds2yamdmFEue5KFRMt4gjqfyqrn7vrPEGNuf8hWyFAMPSwdFKshhKiouj21qgMwCTj3js2nKj7WPJQMxYu7m",
  "key16": "3apAGeozZhAjoQJWU8wWbsbYR5FzS6FBFf1VvKDcCxqEgYTZKRJ38QQWkJQKDqfk9hLtQjpDG3R4JQkEzfL8fQ6j",
  "key17": "3kNH1SPH7JDgiEiHKhDV7xTm4zYKCKhN6xTsUGenc99by54Szoj3PHKvbo37SgWvvtvHmbRSTQ3SPUVdYRq19HCn",
  "key18": "4c9F5HMW267epTfhBtihysokARVJGACHH8EGYfUGKnPchQ9GMUB7veLtA1gp92X6Z34jurzG4NqPPC383NT2NGdF",
  "key19": "2KWTnbmt9ihwcryLPHjNy7YSPJyxofvcdTLhSSpEMZDTdKU3TXcSn2UkNYSPDUZppJ71N4nroWSHk7ZT8BoG3FSN",
  "key20": "65pahViwWFM6PuAxSwQ8HJEoShaJRagcQwznrmpGjrMWTkkRo47S2q7PfCYoVBnsX1qk1JxFjGJzhW4LMwZx933r",
  "key21": "51hc11MpCcVKa3efMsYdULYL3hT6bmf51GZAM3CAw3gi8qaC1F3EpfGqjS38uSvCrnSgHtjmbhmq9orBU3paH1yB",
  "key22": "4BQm93MoJLwxNxbGy7DtWwcwTwpQXaEw1K9AtK8Fbfzpe2L6kfAL2iafF5set4TNaSSom2hXJWnGdnkrGXHwabNJ",
  "key23": "4MPUXNn3hF87iRAqdbcpMRDzWvJ44TyracMF4xvaM88SmnbYrYu1hY7f8mrJT6ttKvocTSBj5JVKZsxfDSBmStFJ",
  "key24": "F7TPDxvcYpQFqw4PcbRf7W7VZx1bkkSK2WysFEsgxpjpGqnUD1uUtRdJqZg6K3aSJESj8mmEVGcFCiAeydAcNnU",
  "key25": "Eye2HGfT8jNqasRhGko7UfyByQqGQdUVYEjaUyP7Ux5nDRMbY8jq78xaYtS7xoesmsift7krjgbQaiL5DrJAgKB",
  "key26": "3g6qzdKbWCu7vAYNTeZt4dpVBeD6qgm6gttweLb9p7sPv8SVSEbhGpst6MaqFRwPNaMbDjdiGTjmReTiccyUkdLJ",
  "key27": "5njq3qpMhkLAUuXHebKwgT9pZFTerKFTm31ucpDFJd5VhDchF8HhxSXBQqNJpqZGKE4BpbeH8qeoivnw93j98Unn",
  "key28": "4wBPNjSbDdPQoaPBG5A53ehvDZXm9PmpRXPmxXgQtqxLZk4sJf3LvhA3A7LpYrvy4bMZWGsXoYZJHfnu74Qknc6Y",
  "key29": "3MZtpwajTkqmagsVK5pju28MvVhNGxZDXSTG23KvmjdUCkfsgbpP9rTcubM3YYR9Heo5R2fjJmp1L9ESGUSf7has",
  "key30": "3M6DjyGWq7T1RavofDma3VfcoTUfiAp1vc5Ho2urqy5xBCqufBzdiM5JdDnifRcsYyUYkrPfhev7xTy22oNzxvmK",
  "key31": "rTcP4Qjm2FcNYL4yXCGT99wmdtwGze4riuwb91htojMvPmQ4iJbdnz9dBMqFf9MPrEbJWxJ6JY3HQu7Efhi3c1y"
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
